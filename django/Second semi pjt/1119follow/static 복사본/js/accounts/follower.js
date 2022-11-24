


const form = document.querySelector('#follow-form')
const csrftoken = document.querySelector('[name=csrfmiddlewaretoken]').value
form.addEventListener('submit', function (event) {
    event.preventDefault()

    const userId = event.target.dataset.userId
    axios({
        method: 'post',
        url: `/accounts/follow/${userId}/`,
        headers: { 'X-CSRFToken': csrftoken, }
    })
        .then((response) => {
            console.log(response)
            const followersCountTag = document.querySelector('#followers-count')
            const followingsCountTag = document.querySelector('#followings-count')
            const followersCount = response.data.followers_count
            const followingsCount = response.data.followings_count
            followersCountTag.innerText = followersCount
            followingsCountTag.innerText = followingsCount
            const isFollowed = response.data.is_followed
            const followBtn = document.querySelector('#follow-form > input[type=submit]')
            if (isFollowed == true) {
                followBtn.value = '언팔로우'
                followBtn.classList.add('btn-outline-danger')
                followBtn.classList.remove('btn-outline-success')
            } else {
                followBtn.value = '팔로우'
                followBtn.classList.add('btn-outline-success')
                followBtn.classList.remove('btn-outline-danger')
            }
        })
})