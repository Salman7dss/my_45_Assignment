#! /usr/bin/env node

function make_album(
  artist: string,
  title: string,
  tracks?: number
): Record<string, any> {
  let album: Record<string, any> = {
    artist: artist,
    title: title,
  };

  // Add the number of tracks to the album object if provided
  if (tracks !== undefined) {
    album["tracks"] = tracks;
  }

  return album;
}

// Making three dictionaries representing different albums
let album1 = make_album("Artist1", "Album1");
let album2 = make_album("Artist2", "Album2", 12); // Providing the number of tracks for this album
let album3 = make_album("Artist3", "Album3");

// Printing each return value to show that objects are storing the album information correctly
console.log(album1);
console.log(album2);
console.log(album3);
