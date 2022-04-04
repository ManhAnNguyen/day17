const data = [
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  "https://hatrabbits.com/wp-content/uploads/2017/01/random.jpg",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg",
  "https://www.ngoaingucongdong.com/wp-content/uploads/2021/11/random-la-gi-03.png",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
  "https://images.unsplash.com/photo-1481349518771-20055b2a7b24?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8cmFuZG9tfGVufDB8fDB8fA%3D%3D&w=1000&q=80",
];
const imageContainer = document.querySelector(".image-container");
const pageContainer = document.querySelector(".page-container");
const renderImage = (start, end) => {
  data.slice(start, end).map((d) => {
    const imageWrapper = document.createElement("div");
    imageWrapper.classList.add("image");
    imageWrapper.innerHTML = `
            <img src = ${d} />
          `;

    imageContainer.appendChild(imageWrapper);
  });
};

const renderPageBtn = () => {
  const pages = data.length / 10;
  for (let i = 1; i <= Math.ceil(pages); i++) {
    const btn = document.createElement("span");
    btn.classList.add("button");
    if (i === 1) {
      btn.classList.add("button-active");
    }
    btn.innerHTML = i;
    pageContainer.appendChild(btn);
  }
  const btns = document.querySelectorAll(".button");

  btns.forEach((button) => {
    button.addEventListener("click", () => {
      btns.forEach((b) => {
        b.classList.remove("button-active");
      });
      button.classList.add("button-active");

      const position = button.innerHTML;
      imageContainer.innerHTML = "";
      renderImage(Number(position * 10) - 10, Number(position * 10));
    });
  });
};
renderImage(0, 10);
renderPageBtn();
