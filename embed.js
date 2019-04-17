var mongoose = require("mongoose");
mongoose.connect("mongodb://localhost/blog_demo",{useNewUrlParser: true});

//POST-title, content

var postSchema= new mongoose.Schema({
    
    title: String,
    content: String
    
})


var Post= mongoose.model("Post",postSchema)

//USER-email,name
var userSchema= new mongoose.Schema({
    email:String,
    name:String,
    posts:[postSchema]
    
});


var User= mongoose.model("User",userSchema);



// var newUser=new User({
    
//       email:"julie@gmail.com",
//       name:"Julie"
    
// })

// newUser.posts.push({
//     title:"Julies Journal",
//     content:"wow what a great day!"
    
// })

// newUser.save(function(err,user){
//     if(err){
//         console.log(err)
//     } else {
//         console.log(user)
//     }
    
// })


User.findOne({name: "Julie"}, function(err,user){
    if(err){
        console.log(err)
    } else {
        user.posts.push({
            title:"sun shine!",
            content:'oh no no sunshine today!?!'
        })
        user.save(function(err,user){
            if(err){
                console.log(err)
            } else{
                console.log(user)
            }
        });
        
    }
    
})

// var newPost = new Post({
//     title: "apple team",
//     content: "yummy"
// })

// newPost.save(function(err,post){
//     if(err){
        
//         console.log(err)
//     } else {
//         console.log(post)
//     }
    
// })