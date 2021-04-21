class form{
    constructor(){

    }
    display(){
        var title = createElement('h2')
        title.html("carracinggame")
        title.position(130,0)
        var input = createInput("Name")
        var button = createButton("play")
        var greeting = createElement('h3')
        input.position(130,160)
        button.position(250,200)
        button.mousePressed(function(){
            input.hide()
            button.hide()
            var Name = inut.value()
            greeting.html("hello"+Name)
            greeting.position(130,160)
        })
    }
}