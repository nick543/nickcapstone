/*global React*/
/*global ReactDOM*/
var content = document.getElementById("content");
function flashYellow(e){
    var oldColor = e.target.style.color;
    e.target.style.color="yellow";
    setTimeout(()=>{
        e.target.style.color=oldColor;
    },500);
}
var Comp = React.createClass({
    opaque: true,
    bgcolor: "#aaa",
    click: function(e){
        var content = document.getElementById("content");
        var height = content.offsetHeight;
        var btnHeight = e.target.offsetHeight;
        e.target.style.color="yellow";
        setTimeout(()=>{
            e.target.style.color="white";
        },500);    
        if(this.opaque){
            content.style.backgroundColor= "transparent";            
            this.opaque = false;
            content.style.top = (btnHeight-height) + "px";
            document.body.style.backgroundColor = "teal";
        }
        else{
            content.style.backgroundColor= this.bgcolor;
            this.opaque = true;
            content.style.top = 0;
            document.body.style.backgroundColor = "white";            
        }
    },
    render: function(){
        return (
            <div id="banner">
                <div id="icons">
                    <span id="menu">&#9776;&nbsp;</span>
                    React Component
                    <span id="phone">&nbsp;&#9742;&nbsp;</span>
                    <span id="mail">&nbsp;&#9993;&nbsp;</span>                    
                     
                </div>
                <br/>
                <div  id="btn" onClick={this.click}>Toggle Green</div>
            </div>
        );
    }
});
//========Lets do rendering in "the DOM"==========
Comp=Comp;//takes away a warning;
ReactDOM.render(<Comp/>, content);
content.addEventListener("click", function(e){
    if( e.target.id !== "banner" && e.target.id !== "icons")flashYellow(e);
},false);
