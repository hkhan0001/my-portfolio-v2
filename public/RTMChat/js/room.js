let messagesContainer = document.getElementById('messages');
messagesContainer.scrollTop = messagesContainer.scrollHeight;

const memberContainer = document.getElementById('members__container');
const memberButton = document.getElementById('members__button');

const chatContainer = document.getElementById('messages__container');
const chatButton = document.getElementById('chat__button');

const shareBtn = document.getElementById('share-btn');

let activeMemberContainer = false;

memberButton.addEventListener('click', () => {
  if (activeMemberContainer) {
    memberContainer.style.display = 'none';
  } else {
    memberContainer.style.display = 'block';
  }

  activeMemberContainer = !activeMemberContainer;
});

let activeChatContainer = false;

chatButton.addEventListener('click', () => {
  if (activeChatContainer) {
    chatContainer.style.display = 'none';
  } else {
    chatContainer.style.display = 'block';
  }

  activeChatContainer = !activeChatContainer;
});

shareBtn.addEventListener('click', event => {
  if (navigator.share) {
    navigator.share({
      title: 'Invite others to your room',
      url: window.location.href,
    }).then(() => {
      console.log('Thanks for sharing!');
    })
    .catch(console.error);
  } else {
    console.log('failed')
  }
});

let displayFrame = document.getElementById('stream__box')
let videoFrames = document.getElementsByClassName('video__container')
let userIdInDisplayFrame = null;

let expandVideoFrame = (e) => {

  let child = displayFrame.children[0]
  if(child)
  {
    document.getElementById("streams__container").appendChild(child)
  }

  displayFrame.style.display = 'block';
  displayFrame.appendChild(e.currentTarget);
  userIdInDisplayFrame = e.currentTarget.id;

  for(let i = 0; i < videoFrames.length; i++)
    {
      if(videoFrames[i].id != userIdInDisplayFrame)
      {
        videoFrames[i].style.height = '100px';
        videoFrames[i].style.width = '100px';
      }
    }
}

for(let i = 0; i < videoFrames.length; i++)
{
  videoFrames[i].addEventListener('click', expandVideoFrame)
}

let hideDisplayFrame = () => {
  userIdInDisplayFrame = null;
  displayFrame.style.display = null;

  let child = displayFrame.children[0]
  document.getElementById("streams__container").appendChild(child)

  if(window.innerWidth > 768)
  {
    for(let i = 0; i < videoFrames.length; i++)
    {
      videoFrames[i].style.height = '300px'
      videoFrames[i].style.width = '300px'
    }
  }
}

displayFrame.addEventListener('click', hideDisplayFrame);