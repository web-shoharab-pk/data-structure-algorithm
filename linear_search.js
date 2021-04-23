const friends = ['alamin', 'nirob', 'robiul', 'safi', 'nafi', ',miraj'];

for (let i = 0; i < friends.length; i++) {
    const element = friends[i];
    if (element == 'safi') {
        return i;
    }
}