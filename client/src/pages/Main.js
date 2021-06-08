import React, { useState, useRef } from "react";

export default function Main() {
  const [list, setList] = useState([]);
  const [index, setIndex] = useState(null);

  return (
    <>
      <TodoList
        list={list}
        setList={setList}
        index={index}
        setIndex={setIndex}
      />
      <Textfield
        list={list}
        setList={setList}
        index={index}
        setIndex={setIndex}
      />
      <Logout />
    </>
  );
}

function TodoList({ list, setList, index, setIndex }) {
  const ulRef = useRef(null);

  const highlight = { color: "white", backgroundColor: "blue" };
  const inactive = { color: "black", backgroundColor: "white" };

  function updateStyle() {
    let arr = Array.from(ulRef.current.children);
    for (let i = 0; i < arr.length; i++) {
      if (i === index) {
        list[i].style = highlight;
      } else {
        list[i].style = inactive;
      }
    }
    setList((prevlist) => [...prevlist]);
  }

  function handleClick(e) {
    let arr = Array.from(ulRef.current.children);
    let ind = arr.indexOf(e.target);
    setIndex(ind);
    updateStyle();
  }

  return (
    <ul ref={ulRef}>
      {list.map((item) => (
        <li
          key={Math.floor(Math.random() * 10000)}
          onClick={handleClick}
          style={item.style}
        >
          {item.title}: {item.content}
        </li>
      ))}
    </ul>
  );
}

function Textfield({ list, setList, index, setIndex }) {
  const titleRef = useRef(null);
  const contentRef = useRef(null);

  function addNote() {
    if (titleRef.current.value !== "" && contentRef.current.value !== "") {
      let listPromise = new Promise((resolve) => {
        setList((prevlist) => [
          ...prevlist,
          {
            title: titleRef.current.value,
            content: contentRef.current.value,
            style: null,
          },
        ]);
        resolve();
      });
      listPromise.then(() => {
        titleRef.current.value = "";
        contentRef.current.value = "";
      });
    } else {
      alert("Please add title and content before adding to list");
    }
  }

  function EditNote() {
    if (index !== null) {
      titleRef.current.value = list[index].title;
      contentRef.current.value = list[index].content;
      RemoveNote();
    }
  }

  function RemoveNote() {
    if (index !== null) {
      list.splice(index, 1);
      setList((prevlist) => [...prevlist]);
      setIndex(null);
    }
  }

  return (
    <form>
      <input placeholder="Title" id="title" ref={titleRef} />
      <input placeholder="Content..." id="content" ref={contentRef} />
      <button type="button" onClick={addNote}>
        Add
      </button>
      <button type="button" onClick={EditNote}>
        Edit
      </button>
      <button type="button" onClick={RemoveNote}>
        Remove
      </button>
    </form>
  );
}

function Logout() {
  function logout() {
    console.log("logout");
  }
  return (
    <a href="" onClick={logout}>
      Logout
    </a>
  );
}
