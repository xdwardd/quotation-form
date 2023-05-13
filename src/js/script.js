const company = [
          { name: "option1", value: "Wellmade Motors & Development Corporation" },
          { name: "option2", value: "Wellmade Innovative Technologies Inc." },
          { name: "option3", value: "Duratech Heavy Industries, Inc." },
          { name: "option4", value: "Cebu Machinist Corporation" },
      ],
  
      csa = [
          { name: "option1", value: "Office sales"},
          { name: "option2", value: "R. Jordan" },
          { name: "option3", value: "J. Osorio" },
          { name: "option4", value: "G. Villaceran" },
      ],
  
      termsofpayment = [
          { name: "option1", value: "50% Downpayment, Balanced COD" },
          { name: "option2", value: "COD Upon Completion" },
          { name: "option3", value: "Post-Dated Check Upon Completion" },
          { name: "option4", value: "Approved Credit Term" },
      ],

      companySlctElmnt = document.querySelector("select#company"),
      csaSlctElmnt = document.querySelector("select#csa"),
      termsofpaymentSlctElmnt = document.querySelector("select#termsofpayment"),
      navTableBtn = document.querySelectorAll(".table-nav label"),
      partsAddBtn = document.querySelector("#parts-add-btn"),
      partsDeleteBtn = document.querySelector("#parts-delete-btn"),
      laborAddBtn = document.querySelector("#labor-add-btn"),
      laborDeleteBtn = document.querySelector("#labor-delete-btn"),
      partsHeadCheckbox = document.querySelector(`.table-container[data-table="parts"] .table-head .checkbox`),
      laborHeadCheckbox = document.querySelector(`.table-container[data-table="labor"] .table-head .checkbox`);

company.map(item => mapSelect(companySlctElmnt, item.name, item.value));
csa.map(item => mapSelect(csaSlctElmnt, item.name, item.value));
termsofpayment.map(item => mapSelect(termsofpaymentSlctElmnt, item.name, item.value));

function mapSelect(element, name, value) {
    element.innerHTML += `<option value="${name}">${value}</option>`;
}

function fetchDataForSelect(fetch_link, table_name) {
    // Fetch link: getparts / getlaborcharge
    // fetch("https://tempapi.proj.me/api/vkgnr6Kwg") Parts temporary API for testing outside company
    // fetch("https://tempapi.proj.me/api/8a_alzz.S") Labor Charges temporary API for testing outside company
    fetch(`http://192.168.1.30:8080/calibrationquotation/${fetch_link}`)
    .then(response => response.json())
      .then(data => {
        const getData = data.data;
        getData.forEach(getData => {
            document.querySelectorAll(`select.${table_name}`)[0].innerHTML += `
                <option value="${getData.id}" data-type="${getData.type}">
                    ${getData.name}
                </option>`;
        });
      });
}

for (let i = 0; i < navTableBtn.length; i++) {
    navTableBtn[i].addEventListener("input", function() {
        if (!this.checked) {
            for (let i = 0; i < navTableBtn.length; i++) {
                navTableBtn[i].classList.remove("active");
            }
            this.classList.toggle("active");
        }
        function hideAll() {
            const tableContainer = document.querySelectorAll(".table-container");
            for (let i = 0; i < tableContainer.length; i++) {
                tableContainer[i].classList.replace("block", "hidden");
            }
        }
        if (document.getElementById("nav-parts").checked) {
            hideAll();
            document.querySelector(`.table-container[data-table="parts"]`).classList.replace("hidden", "block");
        } else if (document.getElementById("nav-labor").checked) {
            hideAll();
            document.querySelector(`.table-container[data-table="labor"]`).classList.replace("hidden", "block");
        }
    });
}

function updateNavListCounter(counter_container, table_list) {
    document.querySelector(counter_container).innerText = document.querySelectorAll(table_list).length;
}

function deleteSelectedList(table_name) {
    const checkboxes = document.querySelectorAll(`.table-container[data-table="${table_name}"] .table-body .checkbox`);
    for (let i = 0; i < checkboxes.length; i++) {
        if (checkboxes[i].checked) {
            const listItem = checkboxes[i].parentNode;
            listItem.remove();
            showDeleteListBtn(table_name);
            updateNavListCounter(`#${table_name}-counter`, `.table-container[data-table="${table_name}"] .table-list`);
        }
    }
}

function showDeleteListBtn(table_name) {
    const addBtn = document.querySelector(`#${table_name}-add-btn`),
          deleteBtn = document.querySelector(`#${table_name}-delete-btn`),
          deleteCounter = document.querySelector(`.table-container[data-table="${table_name}"] .select-list-counter`),
          checkboxes = document.querySelectorAll(`.table-container[data-table="${table_name}"] .table-body .checkbox`),
          anyChecked = [...checkboxes].some(checkbox => checkbox.checked),
          checkedCheckboxes = [...checkboxes].filter(checkbox => checkbox.checked);
    if (anyChecked) {
        addBtn.classList.replace("flex", "hidden");
        deleteBtn.classList.replace("hidden", "flex");
        deleteCounter.innerText = checkedCheckboxes.length;
    } else {
        addBtn.classList.replace("hidden", "flex");
        deleteBtn.classList.replace("flex", "hidden");
    }
    headCheckboxStateChanger(table_name);
}

function headCheckboxCheckAll(table_name, header_checkbox) {
    const addBtn = document.querySelector(`#${table_name}-add-btn`),
          deleteBtn = document.querySelector(`#${table_name}-delete-btn`),
          deleteCounter = document.querySelector(`.table-container[data-table="${table_name}"] .select-list-counter`),
          checkboxes = document.querySelectorAll(`.table-container[data-table="${table_name}"] .table-body .checkbox`);
    if (header_checkbox.checked) {
        checkboxes.forEach(checkbox => {
            checkbox.checked = header_checkbox.checked;
            addBtn.classList.replace("flex", "hidden");
            deleteBtn.classList.replace("hidden", "flex");
            deleteCounter.innerText = [...checkboxes].filter(checkbox => checkbox.checked).length;
        })
    } else {
        checkboxes.forEach(checkbox => checkbox.checked = false);
        addBtn.classList.replace("hidden", "flex");
        deleteBtn.classList.replace("flex", "hidden");
    }
    headCheckboxStateChanger(table_name);
}

function headCheckboxStateChanger(table_name) {
    const headCheckbox = document.querySelector(`.table-container[data-table="${table_name}"] .table-head .checkbox`),
          checkboxes = document.querySelectorAll(`.table-container[data-table="${table_name}"] .table-body .checkbox`),
          checkedCheckboxes = [...checkboxes].filter(checkbox => checkbox.checked);
    if (checkedCheckboxes.length == 0) {
        headCheckbox.classList.remove("indeterminate");
        headCheckbox.checked = false;
        updateEmptyTable(table_name);
    } else if (checkedCheckboxes.length == checkboxes.length) {
        headCheckbox.checked = true;
        updateEmptyTable(table_name);
    } else {
        headCheckbox.classList.add("indeterminate");
        headCheckbox.checked = false;
        updateEmptyTable(table_name);
    }
}

function updateEmptyTable(table_name) {
    const emptyTable = document.querySelector(`.table-container[data-table="${table_name}"] .table-body-empty`),
          headCheckbox = document.querySelector(`.table-container[data-table="${table_name}"] .table-head .checkbox`);
    if (!document.querySelectorAll(`.table-container[data-table="${table_name}"] .table-body li`).length == 0) {
        emptyTable.classList.add("hidden");
        headCheckbox.classList.remove("pointer-events-none");
    } else {
        emptyTable.classList.remove("hidden");
        headCheckbox.classList.add("pointer-events-none");
    }

}

function addListOnTable(table_name, select_placeholder_text, fetch_link) {
    const tableBody = document.querySelector(`.table-container[data-table="${table_name}"] .table-body`),
          createList = document.createElement("li"),
          firstList = document.querySelectorAll(`.table-container[data-table="${table_name}"] .table-list`)[0];
    
    if (firstList) {
        firstList.classList.remove("active");
    }

    createList.className = "table-list flex";
    createList.innerHTML = `<input type="checkbox" class="checkbox icon checkbox-column">
                            <div class="name-column">
                                <select id="" class="${table_name}">
                                    <option value="0" disabled selected>${select_placeholder_text}</option>
                                </select>
                                <span class="select-dropdown icon">&#xe70d;</span>
                            </div>
                            <input type="number" placeholder="-" class="price-column input-list">
                            <input type="number" placeholder="-" class="quantity-column input-list">
                            <span class="flex action-column"><i class="remove-btn icon">&#xe711;</i></span>`;
    
    tableBody.insertAdjacentElement("afterbegin", createList);
    updateNavListCounter(`#${table_name}-counter`, `.table-container[data-table="${table_name}"] .table-list`);
    fetchDataForSelect(fetch_link, table_name);

    const newFirstList = document.querySelectorAll(`.table-container[data-table="${table_name}"] .table-list`)[0],
          removeBtn = document.querySelector("span .remove-btn"),
          checkboxBtn = document.querySelector(`.table-container[data-table="${table_name}"] .table-body .checkbox`);
    
    newFirstList.classList.toggle("active");
    setTimeout(() => {
        newFirstList.classList.remove("active");
    }, 4000);

    removeBtn.addEventListener("click", () => {
        const columnParent = removeBtn.parentNode,
              listParent = columnParent.parentNode;
        listParent.remove();
        showDeleteListBtn(table_name);
        updateNavListCounter(`#${table_name}-counter`, `.table-container[data-table="${table_name}"] .table-list`);
    })

    checkboxBtn.addEventListener("change", () => {
        showDeleteListBtn(table_name);
    })

    updateEmptyTable(table_name);
}

partsAddBtn.addEventListener("click", function () {
    addListOnTable("parts", "Select a parts", "getparts");
})

laborAddBtn.addEventListener("click", function () {
    addListOnTable("labor", "Select labor & machine charges", "getlaborcharge");
})

partsDeleteBtn.addEventListener("click", function() {
    deleteSelectedList("parts");
})

laborDeleteBtn.addEventListener("click", function() {
    deleteSelectedList("labor");
})

partsHeadCheckbox.addEventListener("change", function () {
    headCheckboxCheckAll("parts", partsHeadCheckbox);
})

laborHeadCheckbox.addEventListener("change", function () {
    headCheckboxCheckAll("labor", laborHeadCheckbox);
})