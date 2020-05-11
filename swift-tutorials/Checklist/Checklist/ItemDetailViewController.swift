 //
//  AddItemTableViewController.swift
//  Checklist
//
//  Created by Francisco Vilchez on 12/29/18.
//  Copyright © 2018 Francisco Vilchez. All rights reserved.
//

import UIKit

 protocol ItemDetailViewControllerDelegate : class {
    func itemDetailViewControllerDidCancel(_ controller: ItemDetailViewController)
    func itemDetailViewController(_ controller: ItemDetailViewController, didFinishAdding item: ChecklistItem)
    func itemDetailViewController(_ controller: ItemDetailViewController, didFinishEditing item: ChecklistItem)
 }
 
class ItemDetailViewController: UITableViewController {

    weak var delegate:ItemDetailViewControllerDelegate?
    weak var todoList: TodoList?
    weak var itemToEdit: ChecklistItem?
    
    @IBOutlet weak var textfield: UITextField!
    @IBOutlet weak var addBarButton: UIBarButtonItem!
    @IBOutlet weak var cancelBarButton: UIBarButtonItem!
    
    override func viewDidLoad() {
        super.viewDidLoad()

        if let item = itemToEdit {
            title = "Edit Item"
            textfield.text = item.text
            addBarButton.isEnabled = true
        }
        
        navigationItem.largeTitleDisplayMode = .never
        // Uncomment the following line to preserve selection between presentations
        // self.clearsSelectionOnViewWillAppear = false

        // Uncomment the following line to display an Edit button in the navigation bar for this view controller.
        // self.navigationItem.rightBarButtonItem = self.editButtonItem
    }
    
    override func viewWillAppear(_ animated: Bool) {
        textfield.becomeFirstResponder()
    }

    @IBAction func cancel(_ sender: Any) {
//        navigationController?.popViewController(animated: true)
        delegate?.itemDetailViewControllerDidCancel(self)
    }
    
    @IBAction func done(_ sender: Any) {
//        navigationController?.popViewController(animated: true)
        
        if let item = itemToEdit, let text = textfield.text {
            item.text = text
            delegate?.itemDetailViewController(self, didFinishEditing: item)
        }
        else{
            if let item = todoList?.newTodo() {
                if let textfieldText = textfield.text {
                    item.text = textfieldText
                }
                item.checked = false
                delegate?.itemDetailViewController(self, didFinishAdding: item )
            }
        }
    }
    
    // row can be selected or not
    override func tableView(_ tableView: UITableView, willSelectRowAt indexPath: IndexPath) -> IndexPath? {
        return nil
    }
 }
 
 // This controller is the delegate of the text field (sat up in the storyboard. It means if something happens in the textfield, this is the one to know what happened
 extension ItemDetailViewController : UITextFieldDelegate {
    func textFieldShouldReturn(_ textField: UITextField) -> Bool {
        textfield.resignFirstResponder()
        return false
    }
    
    func textField(_ textField: UITextField, shouldChangeCharactersIn range: NSRange, replacementString string: String) -> Bool {
        
        guard   let oldText = textfield.text,
                let stringRange = Range(range, in: oldText) else {
                return false
        }

        let newText = oldText.replacingCharacters(in: stringRange, with: string)
        if newText.isEmpty {
            addBarButton.isEnabled = false
        }
        else {
            addBarButton.isEnabled = true
        }
        return true
    }
 }
