const post = {
  title: "Post 1",
  body: "Body of post.",
  catagory: "News",
  likes: 1,
  tags: ["news", "events"],
  date: Date(),
};

const posts = [
  {
    title: "Post 2",
    body: "Body of post.",
    catagory: "News",
    likes: 2,
    tags: ["news", "events"],
    date: Date(),
  },
  {
    title: "Post 3",
    body: "Body of post.",
    catagory: "News",
    likes: 3,
    tags: ["news", "events"],
    date: Date(),
  },
  {
    title: "Post 4",
    body: "Body of post.",
    catagory: "News",
    likes: 4,
    tags: ["news", "events"],
    date: Date(),
  },
  {
    title: "Post 5",
    body: "Body of post.",
    catagory: "News",
    likes: 5,
    tags: ["news", "events"],
    date: Date(),
  },
];

{
  title: "Post 6",
  body: "Body of post.",
  catagory: "News",
}

db.posts.updateOne({title: "Post 6"}, {
  $set: {
    title: "Post 6",
    body: "Body of post.",
    catagory: "News"} , {upsert: true}
)