const tabMenu = () => {
    const tabTitles = document.querySelectorAll(".js-tab-title li");
    const tabContents = document.querySelectorAll(".js-tab-content");
  
    tabTitles.forEach((title) => {
      title.addEventListener("click", (e) => {
        const currentTitle = e.currentTarget.getAttribute("data-tab");
        clearActiveClass(tabTitles);
        clearActiveClass(tabContents);
        e.currentTarget.classList.add("active");
  
        if (window.innerWidth < 640) {
          e.currentTarget.scrollIntoView({
            behavior: "smooth",
            inline: "center",
          });
        }
  
        tabContents.forEach((content) => {
          const currentContent = content.getAttribute("data-tab-content");
  
          if (currentTitle === currentContent) {
            content.classList.add("active");
          }
        });
      });
    });
  
    const clearActiveClass = (els) => {
      els.forEach((el) => {
        el.classList.remove("active");
      });
    };
  };
  
tabMenu();