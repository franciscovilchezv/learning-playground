//
//  ChecklistItem.swift
//  Checklist
//
//  Created by Francisco Vilchez on 12/27/18.
//  Copyright © 2018 Francisco Vilchez. All rights reserved.
//

import Foundation

class ChecklistItem: NSObject {
    @objc var text = ""
    var checked = false
    
    func toggleChecked(){
        checked = !checked
    }
    
}
