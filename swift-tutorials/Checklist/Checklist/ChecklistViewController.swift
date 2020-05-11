//
//  ViewController.swift
//  Checklist
//
//  Created by Francisco Vilchez on 12/17/18.
//  Copyright © 2018 Francisco Vilchez. All rights reserved.
//

import UIKit

class ChecklistViewController: UITableViewController {
    
    var todoList: TodoList
    var tableData: [[ChecklistItem?]?]!
    
    @IBAction func addItem(_ sender: Any) {
        let newRowIndex = todoList.todos.count
        _ = todoList.newTodo()
        let indexPath = IndexPath(row: newRowIndex, section: 0)
        tableView.insertRows(at: [indexPath], with: .automatic)
    }
    
    @IBAction func deleteItems(_ sender: Any) {
        if let selectedRows = tableView.indexPathsForSelectedRows {
            var items = [ChecklistItem]()
            for indexPath in selectedRows {
                items.append(todoList.todos[indexPath.row])
            }
            todoList.remove(items: items)
            tableView.beginUpdates()
            tableView.deleteRows(at: selectedRows, with: .automatic)
            tableView.endUpdates()
        }
    }
    
    required init?(coder aDecoder: NSCoder) {
        todoList = TodoList()
        super.init(coder: aDecoder)
    }
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        navigationController?.navigationBar.prefersLargeTitles = true
        
        //Enable edit button
        navigationItem.leftBarButtonItem = editButtonItem
        
        //Enable multi delete
        tableView.allowsMultipleSelectionDuringEditing = true
        
        let sectionTitleCount = UILocalizedIndexedCollation.current().sectionTitles.count
        var allSections = [[ChecklistItem?]?](repeating: nil, count: sectionTitleCount)
        var sectionNumber = 0
        let collation = UILocalizedIndexedCollation.current()
        
        for item in todoList.todos {
            sectionNumber = collation.section(for: item, collationStringSelector: #selector(getter: ChecklistItem.text))
            
            if allSections[sectionNumber] == nil {
                allSections[sectionNumber] = [ChecklistItem?]()
            }
            allSections[sectionNumber]!.append(item)
        }
        tableData = allSections
    }
    
    override func setEditing(_ editing: Bool, animated: Bool) {
        super.setEditing(editing, animated: true)
        tableView.setEditing(tableView.isEditing, animated: true)
    }

    override func tableView(_ tableView: UITableView, numberOfRowsInSection section: Int) -> Int {
        return tableData[section] == nil ? 0 : tableData[section]!.count;
    }

    override func tableView(_ tableView: UITableView, cellForRowAt indexPath: IndexPath) -> UITableViewCell {
        let cell = tableView.dequeueReusableCell(withIdentifier: "ChecklistItem", for: indexPath)
//        let item = todoList.todos[indexPath.row]
        
//        print("cellForRow Index path: \(indexPath.row) matching item \(item.text) previous value \(item.checked)")
        
        if let item = tableData[indexPath.section]?[indexPath.row] {
            configureText(for: cell, with: item)
            configureCheckmark(for: cell, with: item)
        }
        
        return cell
    }
    
    override func tableView(_ tableView: UITableView, didSelectRowAt indexPath: IndexPath) {
        
        if tableView.isEditing {
            return
        }
        
        if let cell = tableView.cellForRow(at: indexPath) {
            
            let item = todoList.todos[indexPath.row]
            
            item.toggleChecked()
//            print("didSelectRowAt Index path: \(indexPath.row) matching item \(item.text) previous value \(item.checked)")
            
            configureCheckmark(for: cell, with: item)
            tableView.deselectRow(at: indexPath, animated: true)
        }
    }
    
    override func tableView(_ tableView: UITableView, commit editingStyle: UITableViewCell.EditingStyle, forRowAt indexPath: IndexPath) {
        todoList.todos.remove(at: indexPath.row)
        tableView.deleteRows(at: [indexPath], with: .automatic)
        
//        tableView.reloadData()
    }
    
    override func tableView(_ tableView: UITableView, moveRowAt sourceIndexPath: IndexPath, to destinationIndexPath: IndexPath) {
        todoList.move(item: todoList.todos[sourceIndexPath.row], to: destinationIndexPath.row)
        tableView.reloadData()
    }
    
    func configureText(for cell: UITableViewCell, with item: ChecklistItem){
//        if let label = cell.viewWithTag(1000) as? UILabel {
        if let checkmarkCell = cell as? ChecklistTableViewCell {
            checkmarkCell.todoTextLabel.text = item.text
        }
    }
    
    func configureCheckmark(for cell: UITableViewCell, with item: ChecklistItem){
//        guard let checkmark = cell.viewWithTag(1001) as? UILabel else {
        guard let checkmarkCell = cell as? ChecklistTableViewCell else {
            return
        }
        
        if item.checked {
//            cell.accessoryType = .checkmark
            checkmarkCell.checkmarkLabel.text = "√"
        }
        else {
//            cell.accessoryType = .none
            checkmarkCell.checkmarkLabel.text = ""
        }
    }
    
    override func prepare(for segue: UIStoryboardSegue, sender: Any?) {
        if segue.identifier == "AddItemSegue"{
            if let itemDetailViewController = segue.destination as? ItemDetailViewController {
                // Otra forma de setear el delegate. Si algo pasa en el itemDetailViewController, esta clase va a ser la que lo sepa. Se esta pasando el mismo como parametro
                itemDetailViewController.delegate = self
            }
        }
        else if segue.identifier == "EditItemSegue" {
            if let itemDetailViewController = segue.destination as? ItemDetailViewController{
                if let cell = sender as? UITableViewCell,
                   let indexPath = tableView.indexPath(for: cell){
                    let item = todoList.todos[indexPath.row]
                    itemDetailViewController.itemToEdit = item
                    itemDetailViewController.delegate = self
                }
            }
        }
    }
    
    override func numberOfSections(in tableView: UITableView) -> Int {
        return tableData.count
    }
    
    override func sectionIndexTitles(for tableView: UITableView) -> [String]? {
        return UILocalizedIndexedCollation.current().sectionTitles
    }
    
    override func tableView(_ tableView: UITableView, sectionForSectionIndexTitle title: String, at index: Int) -> Int {
        return UILocalizedIndexedCollation.current().section(forSectionIndexTitle: index)
    }
    
    override func tableView(_ tableView: UITableView, titleForHeaderInSection section: Int) -> String? {
        return UILocalizedIndexedCollation.current().sectionTitles[section]
    }
}

extension ChecklistViewController : ItemDetailViewControllerDelegate {
    func itemDetailViewControllerDidCancel(_ controller: ItemDetailViewController) {
        navigationController?.popViewController(animated: true)
    }
    
    func itemDetailViewController(_ controller: ItemDetailViewController, didFinishAdding item: ChecklistItem) {
        navigationController?.popViewController(animated: true)
        let rowIndex = todoList.todos.count - 1
        todoList.todos.append(item)
        let indexPath = IndexPath(row: rowIndex, section: 0)
        tableView.insertRows(at: [indexPath], with: .automatic)
    }
    
    func itemDetailViewController(_ controller: ItemDetailViewController, didFinishEditing item: ChecklistItem) {
        if let index = todoList.todos.index(of: item) {
            let indexPath = IndexPath(row: index, section: 0)
            if let cell = tableView.cellForRow(at: indexPath) {
                configureText(for: cell, with: item)
            }
        }
        navigationController?.popViewController(animated: true)
    }
}
