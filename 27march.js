var library=[{
    author:'bill gates',
    title:'the road ahead',
    readingstatus:true
},
{
    author:'steve jobs',
    title:'walter isaacson',
    readingstatus:true
},
{
    author:'suzanne collins',
    title:'mockingjay: the final book of the hunger games',
    readingstatus:false
}
]
for (var i = 0; i <library.length; i++) {
    var book = "'" + library[i].title + "'" + 'by' + library[i].author + ".";
    if (library[i].readingstatus) {
        console.log("Already read " + book );

    } else{
        console.log("start reading" + book )
    
    }
}
