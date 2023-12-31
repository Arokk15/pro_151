AFRAME.registerComponent("base",{
    schema:{
        radius:{type:"number", default:7},
        height:{type:"number", default:0.1},
        left:{type:"number",default:0},
        right:{type:"number" , default:0}
    },
    init:function(){
        this.el.setAttribute("geometry",{
            primitive:"cylinder",
            radius:this.data.radius,
            height:this.data.height,
            
        });
        this.el.setAttribute("position",{
            x:0,
            y:-2,
            z:-12
        })
        this.el.setAttribute("rotation",{
            x:0,
            y:0,
            z:0
        })
        this.el.setAttribute("material",{
            color:"#1769aa",
            
        })
    }

    

});