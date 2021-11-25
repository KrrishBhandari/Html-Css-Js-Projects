const iconBx = document.querySelectorAll(".iconBx");
const contentBx = document.querySelectorAll(".contentBx");

for (let i = 0; i < iconBx.length; i++) {
  iconBx[i].addEventListener("mouseover", () => {
    for (let i = 0; i < contentBx.length; i++) {
      contentBx[i].classList = "contentBx";
    }
    document.getElementById(this.dataset.id).className = "contentBx active";

    for (let i = 0; i < iconBx.length; i++) {
      iconBx[i].classList = "iconBx";
    }
    document.getElementById(this.dataset.id).className = "iconBx active";
  });
}
