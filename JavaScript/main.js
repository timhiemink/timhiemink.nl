var MenuClosed = true;

function toggleMenu() {
    var element = document.getElementById("nav-menu-id");
    var header = document.getElementById("header-id");
    if (MenuClosed === true) { 
        element.style.display = "flex"  
        element.style.height = `calc(100vh - ${header.offsetHeight}px)`;
        element.style.margin = `${header.offsetHeight}px) 0 0 0`;

        MenuClosed = false;
    } else {
        element.style.display = "none"
        element.style.height = `calc(100vh - ${header.offsetHeight}px)`;
        element.style.margin = `${header.offsetHeight}px) 0 0 0`;
    }
    
}