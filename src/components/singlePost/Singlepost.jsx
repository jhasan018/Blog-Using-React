import "./singlepost.css"

export default function Singlepost() {
  return (
    <div className="singlePost">
        <div className="singlePostWrapper">
            <img className="singlePostImg" src="https://thumbs.dreamstime.com/z/christmas-lantern-snow-fir-tree-branch-winter-cozy-scene-161055797.jpg" alt=""/>
            <h1 className="singlePostTitle">Lorem ipsum dolor sit amet.
            <div className="singlePostEdit">
            <i className="singlePostIcon fa-regular fa-pen-to-square"></i>
            <i className="singlePostIcon fa-solid fa-trash-can"></i>
            </div>
            </h1>
            <div className="singlePostInfo">
                <span className="singlePostAuthor">Author: <b>Jahid</b></span>
                <span className="singlePostDate">2 hours ago</span>
            </div>
            <p className="singlePostDesc">Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora suscipit eos repellendus, voluptates consequuntur animi dolores illum voluptatibus deleniti, quisquam tempore veritatis repudiandae eligendi totam excepturi aperiam. Ullam explicabo labore vitae earum officia cumque odio ipsa dolorum placeat iure nulla aperiam dolor iste veritatis voluptatum neque unde consectetur itaque tempora molestias, dolore quaerat quibusdam. Pariatur illum nostrum molestias quia quod vero blanditiis omnis, culpa esse nobis iusto repudiandae sed ipsum, impedit numquam fugit. Velit reprehenderit, tempora saepe iste itaque recusandae suscipit culpa voluptates voluptatem laudantium quis illo magnam? Hic error tempora dolorem enim non aut culpa libero odit. Praesentium, minima?</p>
        </div>
    </div>
  )
}
