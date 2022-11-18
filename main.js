
(function(){
    const box = document.querySelector(".box");
    const dropdownNote = document.querySelector(".dropdown-note");
    const add = document.querySelector(".add");
    const notebook = document.querySelector(".notebook");
    let dayArray = [
        "Sun", "Mon","Tue","Wed","Thu","Fri","Sat"
    ];
    let monthArray = [
        "Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"
    ];
    const myDate= new Date();
    let day = myDate.getDay();
    let months = myDate.getMonth();
    let years = myDate.getFullYear();
    add.addEventListener("click", function(event){
        const newDiv=document.createElement("div");
        newDiv.classList.add("textarea-box");
        newDiv.innerHTML=`
            <div class="subject">
                <input type="text" placeholder="Subject : required" id="subject">
            </div>
            <div class="textarea">
                <textarea name="textarea" id="textarea" cols="30" rows="10" placeholder="Typing...."></textarea>
            </div> 
            <div class="time">${dayArray[day]}, ${monthArray[months]}, ${years}</div>
            `
        dropdownNote.appendChild(newDiv);
        dropdownNote.classList.add("add-dropdown")
        let emptySubject=event.target.parentElement.parentElement.parentElement.nextElementSibling.children[1].children[0].children[0];
        let emptyTextarea=event.target.parentElement.parentElement.parentElement.nextElementSibling.children[1].children[1].children[0];
        emptySubject.value="";
        emptyTextarea.value="";
    });

    const remove = document.querySelector(".cancel");
    const noteFooter = document.querySelector(".note-footer");
    remove.addEventListener("click", function(event){
        
        let empty =event.target.parentElement.parentElement.parentElement.nextElementSibling;
        // console.log(empty);
        empty.remove();
        dropdownNote.classList.remove("add-dropdown");
    });

    const save = document.querySelector(".save");
    save.addEventListener("click", function(event){
        let subjectValue=event.target.parentElement.parentElement.parentElement.nextElementSibling.children[0].children[0].value;
        let textValue=event.target.parentElement.parentElement.parentElement.nextElementSibling.children[0].children[0].value;
        let input=event.target.parentElement.parentElement.parentElement.nextElementSibling.children[0].children[0];
        let textareaValue=event.target.parentElement.parentElement.parentElement.nextElementSibling.children[1].children[0].value;
        let textarea2=event.target.parentElement.parentElement.parentElement.nextElementSibling.children[1].children[0];
        const newDiv=document.createElement("div");
        newDiv.classList.add("new-div-class", "row");
        const newDivBody=document.createElement("div");
        newDivBody.classList.add("ben");
        let subjsctTime =event.target.parentElement.parentElement.parentElement.nextElementSibling.children[2].innerHTML;
        // console.log(textValue);
        // console.log(textareaValue);
        // console.log(input);
        if(!subjectValue==""){
            newDiv.innerHTML=`
            <div class="subject-head">${subjectValue}</div>
            <div class="subject-time">${subjsctTime}</div>
            <div class="deleteIcon"><img src="pictures/icons8-trash-50.png" class="delete-new-div" alt=""></div>
            `
            newDivBody.innerHTML = `
            
                <div class="dropdown-note">
                    <div class="note-header">
                        <div class="container">
                          <div class="row">
                             <div class="cancel">Back</div>
                          </div>
                        </div>
                    </div>
                    <div class="textarea-box spac">
                        <div class="subject">
                            ${textValue}
                        </div>
                        <div class="textarea">
                        ${textareaValue}
                        </div> 
                        <div class="time">${dayArray[day]}, ${monthArray[months]}, ${years}</div>
                    </div>
                </div>
            
            `
            notebook.insertBefore(newDiv,noteFooter);
            notebook.insertBefore(newDivBody,noteFooter);
            let empty =event.target.parentElement.parentElement.parentElement.nextElementSibling;
            // console.log(empty);
            empty.remove();
            dropdownNote.classList.remove("add-dropdown");
           
        }else{
            let empty =event.target.parentElement.parentElement.parentElement.nextElementSibling;
            // console.log(empty);
            empty.remove();
            dropdownNote.classList.remove("add-dropdown");
        }
        // console.log(newDiv.children[2]);
        newDiv.addEventListener("click", function(e){
            if(e.target.classList.contains("delete-new-div")){
                e.target.parentElement.parentElement.remove();
            }
            if(e.target.parentElement.classList.contains("new-div-class")){
                e.target.parentElement.nextElementSibling.children[0].classList.add("add-dropdown");
                newDiv.add("disply-none");
                e.target.parentElement.parentElement.lastElementChild.classList.add("add-dropdown");
            }
            
        });
        newDivBody.addEventListener("click", function(e){
            let pos = e.target.parentElement.parentElement.parentElement.parentElement;
            if (e.target.classList.contains("cancel")) {
                pos.classList.remove("add-dropdown");
            }
        });

    });



})();
