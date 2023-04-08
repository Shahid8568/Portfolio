let liA =  document.querySelectorAll('.li');
          liA.forEach(liA =>{
            liA.addEventListener('click',()=>{
            document.querySelector(".active")?.classList.remove('active')
            liA.classList.add('active')
            })
          })
          
          let skill = document.getElementById("skills")
          let education = document.getElementById("education")
          let sLi = document.getElementById("sLi")
          let eLi = document.getElementById("eLi")

          sLi.addEventListener("click",()=>{
           skill.style.display ="block"
           education.style.display = "none";
          });

          eLi.addEventListener("click",()=>{
           education.style.display = "block"
           skill.style.display = "none";
          });