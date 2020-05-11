//
//  ViewController.swift
//  BullsEye
//
//  Created by Francisco Vilchez on 10/9/18.
//  Copyright © 2018 Francisco Vilchez. All rights reserved.
//

import UIKit

class ViewController: UIViewController {

    var currentValue : Int = 0
    var targetValue : Int = 0
    var score = 0
    var round = 0
    
    @IBOutlet weak var slider : UISlider!
    @IBOutlet weak var randomLabel : UILabel!
    @IBOutlet weak var scoreLabel : UILabel!
    @IBOutlet weak var roundLabel : UILabel!
    
    override func viewDidLoad() {
        super.viewDidLoad()
        // Do any additional setup after loading the view, typically from a nib.
        targetValue = Int.random(in: 1...100)
        
        let roundedValue = slider.value.rounded()
        currentValue = Int(roundedValue)
        
        self.newGame()
        
        let thumbImageNormal = UIImage(named: "SliderThumb-Normal")!
        slider.setThumbImage(thumbImageNormal, for: .normal)
        
        let thumbImageHighlighted = #imageLiteral(resourceName: "SliderThumb-Highlighted")
        slider.setThumbImage(thumbImageHighlighted, for: .highlighted)
        
        let insets = UIEdgeInsets(top: 0, left: 14, bottom: 0, right: 14)
        
        let trackLeftImage = #imageLiteral(resourceName: "SliderTrackLeft")
        let trackLeftImageResizable = trackLeftImage.resizableImage(withCapInsets: insets )
        slider.setMinimumTrackImage(trackLeftImageResizable, for: .normal)
        
        let trackRightImage = #imageLiteral(resourceName: "SliderTrackRight")
        let trackRightImageResizable = trackRightImage.resizableImage(withCapInsets: insets )
        slider.setMaximumTrackImage(trackRightImageResizable, for: .normal)
    }

    override func didReceiveMemoryWarning() {
        super.didReceiveMemoryWarning()
        // Dispose of any resources that can be recreated.
    }
    
    @IBAction func showAlert() {
        
        let difference = abs(currentValue - targetValue);
        var points = 100 - difference
        
        let title : String
        
        if(difference == 0){
            title = "Perfect!"
            points += 100
        }
        else if(difference < 5){
            title = "You are getting close"
            if(difference == 1){
                points += 50
            }
        }
        else {
            title = "Not even close..."
        }
        
        score += points
        
        let alert = UIAlertController(title: title, message: "You scored \(points) points", preferredStyle: .alert)
        
        let action = UIAlertAction(title: "Awesome", style: .default, handler: {
            action in
            self.startOver()
        })
        
        alert.addAction(action)
        present(alert, animated: true, completion: nil)
        
    }

    @IBAction func sliderMovement(_ slider: UISlider){
        let roundedValue = slider.value.rounded()
        currentValue = Int(roundedValue)
    }

    func startOver() {
        currentValue = 50
        slider.value = Float(currentValue)
        targetValue = Int.random(in: 1...100)
        round += 1
        updateLabels()
    }
    
    func updateLabels() {
        randomLabel.text = String(targetValue)
        scoreLabel.text = String(score)
        roundLabel.text = String(round)
    }
    
    @IBAction func newGame(){
        score = 0
        round = 0
        startOver()
    }
    
    
}

