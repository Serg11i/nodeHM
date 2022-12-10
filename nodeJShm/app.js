const fs = require('fs').promises;
const path = require('path');


fs.readdir(__dirname)
.then(value =>{
    for(let y = 1; y<3; y++){
        let yum = value[y]
        fs.readdir(path.join(yum)).then(valueDir =>{
            valueDir.forEach(nameFiles =>{
                let files = path.join(yum, nameFiles)
                fs.readFile(files).then(value =>{
                let sergay = JSON.parse(value)
                    if (sergay.gender === 'male') fs.rename(files, path.join('boys', nameFiles))
                        else if (sergay.gender === 'female') fs.rename(files, path.join('girls',nameFiles))
                            else {return}                             
             })
        })
    })}
})
        
        
    