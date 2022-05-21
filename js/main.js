const feedbackCard = document.querySelectorAll('.feedback');
const emptyCard = document.querySelector('.empty-feedback');

if(feedbackCard.length === 0) {
    emptyCard.classList.add('show-card');
}
