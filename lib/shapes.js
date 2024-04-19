class Shape {
    constructor(logoText, textColor, shapeColor){
        this.logoText=logoText
        this.textColor=textColor
        this.shapeColor=shapeColor
    }
}

class Circle extends Shape {
    
    render(){
        return`
        <svg version="1.1"
     width="300" height="200"
     xmlns="http://www.w3.org/2000/svg">

 

  <circle cx="150" cy="100" r="80" fill="${this.shapeColor}" />

  <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.logoText}</text>

</svg>`
        
    }
    }
class Triangle extends Shape {
    
        render(){
            return`
            <svg version="1.1"
         width="300" height="200"
         xmlns="http://www.w3.org/2000/svg">
    
     
    
      <polygon points = "50,0 100,100 0,100"  fill="${this.shapeColor}" />
    
      <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
    
    </svg>`
            
        }
        }
        
class Square extends Shape{
            render(){
                return`
                <svg version="1.1"
             width="300" height="200"
             xmlns="http://www.w3.org/2000/svg">
        
         
        
          <rect x="10" y="10" width="80" height="80" fill="${this.shapeColor}" />
        
          <text x="150" y="125" font-size="60" text-anchor="middle" fill="${this.textColor}">${this.text}</text>
        
        </svg>`
                
            }
            }
        
module.exports={Circle, Triangle, Square}


