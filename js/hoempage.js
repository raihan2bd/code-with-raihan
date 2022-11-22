
// this function will toggle article modal
const toggleModal = () => {
  gElem('.modal-article').classList.toggle('df')
}

// selecting program btn a modal
const seeMoreProgram = gElemAll('.btn-modal');
seeMoreProgram.forEach(btn => {
  btn.addEventListener('click', toggleModal)
})

// close article modal using cross button
gElem('.cross-modal').addEventListener('click', toggleModal)

// Feature Turor Section

// Fake Backend Tutor Data
const tutorsData = [
  {
    id: 'tutor1',
    profileImage: './images/raihan.jpg',
    name: 'Abu Raihan',
    position: 'Full Stack Engineer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati'
  },
  {
    id: 'tutor2',
    profileImage: './images/raihan.jpg',
    name: 'Abu Raihan',
    position: 'Full Stack Engineer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati'
  },
  {
    id: 'tutor3',
    profileImage: './images/raihan.jpg',
    name: 'Abu Raihan',
    position: 'Full Stack Engineer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati'
  },
  {
    id: 'tutor4',
    profileImage: './images/raihan.jpg',
    name: 'Abu Raihan',
    position: 'Full Stack Engineer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati'
  },
  {
    id: 'tutor5',
    profileImage: './images/raihan.jpg',
    name: 'Abu Raihan',
    position: 'Full Stack Engineer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati'
  },
  {
    id: 'tutor6',
    profileImage: './images/raihan.jpg',
    name: 'Abu Raihan',
    position: 'Full Stack Engineer',
    description: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Et cumque error earum minus aliquam obcaecati'
  }
  
];

// Initialize pagination variables
let currentPage = 1;
let perpage = 3;

// Selecting the More button from Feature Turor
const seeMoreTutors = gElem('.see-more-tutors');

// This function is resposible for Update Tutor List
const updateTutorDom = (data, hasPage, d=false) => {
  let mobileTutor = gElem('#m-tutor-group');

  // check if this is for desktop or not
  if(d) {
    mobileTutor = gElem('#d-tutor-group')
    console.log('hi')
  } else {

    // hide or show the more button when Next page is not available
    if(!hasPage) {
      seeMoreTutors.classList.remove('df')
    } else {
      seeMoreTutors.classList.add('df')
    }
  }

  // Iterate tutor data and appending on the dom
  data.forEach(item => {
    let mobileTutorList = dcl('li');
    mobileTutorList.id = item.id;
    mobileTutorList.className = 'tutor-list'
    mobileTutorList.innerHTML = `
    <div class="tutor-img">
      <img class="tiles" src="./images/tiles.png" alt="tiles"/>
      <img class="profile" src="${item.profileImage}" alt="${item.name}"/>
    </div>
    <div class="tutor-info">
      <h3 class="tutor-name">${item.name}</h3>
      <h6 class="tutor-position">
        ${item.position}
      </h6>
      <P class="tutor-details">${item.description}</P>
    </div>`;
  mobileTutor.append(mobileTutorList);
  });
}

// This function is responsible for updating the mobile feature data with pagination.
const fecthTutorDataForMobile = (page = 1) => {
  currentPage = page
  let hasPage = currentPage*perpage<tutorsData.length;
  let mobileTutorArr = [];
  if(perpage<tutorsData.length) {
    for(let i=Math.abs( currentPage*perpage -perpage); i<currentPage*perpage&&i<=tutorsData.length && i>=0; i+=1) {
      mobileTutorArr.push(tutorsData[i]);
    };
  }

  // calling this function for update the dom
  updateTutorDom(mobileTutorArr, hasPage);
}

// Add EventListener to More button and update dom
seeMoreTutors.addEventListener('click', () => {
  if(currentPage*perpage<tutorsData.length) {
    
    fecthTutorDataForMobile(currentPage + 1);
  } else {
    seeMoreTutors.classList.remove('df');
  }
})

// Fetching Data for desktop 
const fecthTutorDataForDesktop =()  => updateTutorDom(tutorsData, false, true);

// Fetching dinamic data on the fly using this window objec
window.onload = () => {
  fecthTutorDataForMobile();
  fecthTutorDataForDesktop();
}