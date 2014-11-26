var output = [
  {name: "Kilimanjaro", height: 5895, country: "Tanzania"},
  {name: "Everest", height: 8848, country: "Nepal"},
  {name: "Mount Fuji", height: 3776, country: "Japan"},
  {name: "Mont Blanc", height: 4808, country: "Italy/France"},
  {name: "Vaalserberg", height: 323, country: "Netherlands"},
  {name: "Denali", height: 6168, country: "United States"},
  {name: "Popocatepetl", height: 5465, country: "Mexico"}
];



//rows is multiple rows
//each row is consist of cells
//cell will have width and height

function rowHeights(rows) {
    return rows.map(function(row){
        return row.reduce( function(max, cell){
            return Math.max(max, cell.minHeight())  
        }, 0) 
    })
}

function colWidth(rows) {
    // - - - - 
    // - - - - 

    //col
    return rows[0].map(function(_, i){
        return rows.reduce(function(max, row){
            return Math.max(max, row[i].minWidth()) 
        }, 0)

    })

}


function drawTable(rows){

    var widths = colWidth(rows)
    var heights = rowHeights(rows)

    function drawRow(row, rowN) {
        //block for every row
        var blocks =  row.map(function(cell, colN){
            return cell.draw(widths[colN], heights[rowN])
        })


        //combine every first element + combine every second element

        return blocks[0].map(function(_, colNInBlock){
            //this colud be retrieved as a function
            return blocks.map(function(block){
                return block[colNInBlock]
            }).join("  ")
        }).join("\n")
    }

    return rows.map(drawRow).join("\n")
}



function repeat(str, times) {

    var result = ""
    for (var i=0; i < times; i++) {
        result += str; 
    };
    return result
}


//constructor
// Text could be  multiple line, i.e.:
//
// ["daniel", "xu"] could be in two lines
function TextCell(text) {
    //this.text is an array
    this.text = text.split("\n")
}

TextCell.prototype.minHeight = function() {
    return this.text.length
}

TextCell.prototype.minWidth = function() {

    return this.text.reduce(function(max, ele){
        return Math.max(max, ele.length)
    }, 0)
}

//draw, make the cell's elements same width
TextCell.prototype.draw = function(width, height){
    var result = []
    for (var i=0; i < height; i++) {
        var current = this.text[i] || ""

        result.push(current + repeat(" ", width-current.length))  
    }
    return result
}

function UnderlinedCell(inner) {

    this.inner = inner;
}

UnderlinedCell.prototype.minWidth = function() {
    return this.inner.minWidth()
}

UnderlinedCell.prototype.minHeight = function() {

    return this.inner.minHeight() +1
}

UnderlinedCell.prototype.draw = function(width, height){

    return this.inner.draw(width, height-1).concat([repeat("-", width)])
}



function test() {

    var rows = []
    for (var i=0; i < 5; i++) {
        var row = []
        for(var j =0;  j < 5; ++j) {
            if((j+i) %2 == 0 )  {
                row.push(new TextCell("##")) 
            } else {
                row.push(new TextCell("  "))
            }
        }

        rows.push(row)
    }


    console.log(drawTable(rows))
}



function dataTable(data) {

    var keys = Object.keys(data[0])

    var headers = keys.map(function(name, i){
        return new UnderlinedCell(new TextCell(name))
    })

    var body = data.map(function(row){
        return keys.map(function(name ){
            return new TextCell(String(row[name]))
        })        
    })
    return [headers].concat(body)
    
}

//test()
console.log(drawTable(dataTable(output)))



