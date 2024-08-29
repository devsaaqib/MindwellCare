const localVideo = document.getElementById('local-video');
const remoteVideo = document.getElementById('remote-video');
const callButton = document.getElementById('call-button');
const remotePeerIdInput = document.getElementById('remote-peer-id');

let localStream;
let currentCall;

// Initialize PeerJS
const peer = new Peer(); // Uses PeerServer by default (a free one is available at PeerJS)

peer.on('open', (id) => {
    console.log('My peer ID is:', id);
});

// Get the local video stream
navigator.mediaDevices.getUserMedia({ video: true, audio: true })
    .then((stream) => {
        localStream = stream;
        localVideo.srcObject = stream;
    })
    .catch((error) => {
        console.error('Error accessing media devices.', error);
    });

// Answering a call
peer.on('call', (call) => {
    currentCall = call;
    call.answer(localStream); // Answer the call with your own video/audio stream
    call.on('stream', (remoteStream) => {
        remoteVideo.srcObject = remoteStream; // Show stream in some video/canvas element.
    });
});

// Making a call
callButton.addEventListener('click', () => {
    const remotePeerId = remotePeerIdInput.value;
    if (remotePeerId) {
        const call = peer.call(remotePeerId, localStream);
        call.on('stream', (remoteStream) => {
            remoteVideo.srcObject = remoteStream; // Show stream in some video/canvas element.
        });
        currentCall = call;
    } else {
        alert('Please enter a valid remote peer ID');
    }
});
