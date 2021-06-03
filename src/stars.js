import React from 'react';


class Starfield extends React.PureComponent {
    constructor(props){
        super(props);
        this.starfieldRef = React.createRef();
        this.smallStars = 300;
        this.largeStars = 50;
        this.container = document.getElementById('starfield');
    }

    
    
    randomVal(max, min) {
        return Math.floor((Math.random() * (max - min)) + min);
    }
      
    SmallS()
    {
        for (let i = 0; i < this.smallStars; i++) {
            let star = document.createElement('div');
        
            /*
            star.className = 'stars';
            star.style.height = this.randomVal(2, 1) + 'px';
            star.style.width = this.randomVal(2, 1) + 'px';
            star.style.top = this.randomVal(100, 5) + 'vh';
            star.style.left = this.randomVal(100, 5) + 'vw';
            this.container.appendChild(star);
            */
            
        }
    }
      
    BigS() {
        for (let i = 0; i < this.largeStars; i++) {
            let star = document.createElement('div');
        
            star.className = 'large-stars';
            star.style.height = this.randomVal(5, 4) + 'px';
            star.style.width = this.randomVal(5, 4) + 'px';
            star.style.top = this.randomVal(80, 5) + 'vh';
            star.style.left = this.randomVal(80, 5) + 'vw';
            this.container.appendChild(star);
        }
    }

    getSmallStars = (num) => {
        const array = []
    
        for(var i = 1; i <= num; i++){
          array.push(<div className="stars" style={{height: this.randomVal(2, 1) + 'px', weight: this.randomVal(2, 1) + 'px', top: this.randomVal(100, 0) + 'vh', left: this.randomVal(100, 0) + 'vw',}}></div>)
        }
    
        return array
    }
    getLargeStars = (num) => {
        const array = []
    
        for(var i = 1; i <= num; i++){
          array.push(<div className="stars" style={{height: this.randomVal(5, 4) + 'px', weight: this.randomVal(5, 4) + 'px', top: this.randomVal(100, 0) + 'vh', left: this.randomVal(100, 0) + 'vw',}}></div>)
        }
    
        return array
    }

    render(){
        return(
          <div>

            {this.getSmallStars(80)}
            {this.getLargeStars(20)}
            


          </div>
        );
    }


}
export default Starfield