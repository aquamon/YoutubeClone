const commentsData = [
 {
    name : "Monash Chhetri",
    text : "Amazing!!!",
    replies : [{
        name : "Kartik",
        text : "Lets jazz it up",
        replies :[{
            name : "Neel",
            text : "What is it!!!!!!!!",
            replies : []
        }]
    }]
 },
 {
    name : "Shivang Tyagi",
    text : "Kudos.....!!!",
    replies : [{
        name : "Momo",
        text : "I am watching you!!!",
        replies : [
            {
                name : "Narendra Modi",
                text : "I love BJP",
                replies : []
             },
             {
                name : "Arvind Kejriwal",
                text : "Delhi loves Kejriwal",
                replies : [ 
                    {
                    name : "Gopala Venkateswara",
                    text : "HEHE!!!",
                    replies : [
                        {
                            name : "Gopala Venkateswara",
                            text : "HEHE!!!",
                            replies : []
                         },
                         {
                            name : "Narendra Modi",
                            text : "I love BJP",
                            replies : [
                                {
                                    name : "Gopala Venkateswara",
                                    text : "HEHE!!!",
                                    replies : []
                                 },
                                 {
                                    name : "Narendra Modi",
                                    text : "I love BJP",
                                    replies : [
                                        {
                                            name : "Gopala Venkateswara",
                                            text : "HEHE!!!",
                                            replies : []
                                         },
                                         {
                                            name : "Narendra Modi",
                                            text : "I love BJP",
                                            replies : []
                                         },
                                    ]
                                 },
                            ]
                         },
                    ]
                    }
                ]
             }
        ]
    }]
 },
 {
    name : "Gopala Venkateswara",
    text : "HEHE!!!",
    replies : []
 },
 {
    name : "Narendra Modi",
    text : "I love BJP",
    replies : []
 },
 {
    name : "Arvind Kejriwal",
    text : "Delhi loves Kejriwal",
    replies : []
 },
];

const Comment = ({ data }) => {
  const { name, text,replies } = data;

  return (
    <div className="flex shadow-sm bg-gray-100 p-2 rounded-lg m-2">
      <img
        className="h-8"
        alt="user-icon"
        src="https://cdn-icons-png.flaticon.com/512/552/552721.png"
      />
      <div className="ml-5">
        <p className="font-bold">{name}</p>
        <p>{text}</p>
      </div>
    </div>
  );
};

const CommentList = ({comments})=>{
    
    return comments?.map((comment,index)=>(
        <div>
            <Comment key={index} data={comment}/>
            <div className="pl-5 border border-l-2 border-l-black ml-5">
                <CommentList key={index} comments={comment.replies}/>
            </div>
        </div>
    ));
};


const CommentsContainer = () => {
  return (
    <div className="m-5 p-2">
        <h1 className="font-bold text-2xl">Comments : </h1>
        <CommentList comments={commentsData} />
     
    </div>
  );
};

export default CommentsContainer;
