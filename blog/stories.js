// Note: Please Read.
// This file is for editing cancer stories.
// If you want to add a new exam time, please use the following syntax:
//
//	{
//		"id": "",
//		"date": "",
//		"title": "",
//		"type": "",
//		"image": "",
//		"abstract": "",
//		"full": `
//			Line 1
//			---
//			Line 2
//			---
//			Line 3...
//			`,
//	}
//
// Where:
//	"id": The ID of the story. Come up with a unique ID for each story and never change it (affects the URL). Only use letters and/or numbers.
//	"date": Date of when the story was added.
//	"title": Title of the story.
//	"type": Type of cancer. Available options: prostate, breast, melanoma, testis, blood, cns, head, lung, thyroid, colorectal, liver, kidney, sarcoma, bladder, stomach, uterus.
//	"image": File name of the image to use. Must include the file extension (e.g., .jpg, .png). Place all images in the "images" folder.
//	"abstract": 1 paragraph abstract of the story.
//	"full": Multi-line text of the full story. Separate each line with 3 dashes (---).
//
// PLEASE DO NOT EDIT ANYTHING ELSE IN THE CODE.
// SEPARATE EACH STORY WITH A COMA.
// DO NOT RENAME THIS FILE.

var cancerStories = [
  {
	"id": "test",
		"date": "08/06/2022",
		"title": "كانسر",
		"type": "testis",
		"image": "test.jpg",
		"abstract": "yo wassup people",
		"full": `
			yo wassup everyone. POGGERZ
      --- 
      POGGERZ
      ---
      POGGERZ
			`,
	}, 
	{
	"id": "test1",
		"date": "05/06/2000",
		"title": "مجاهد",
		"type": "colorectal",
		"image": "test.jpg",
		"abstract": "abdlawati1 is a legend",
		"full": `
			He is built different
      --- 
      POGGERZ
      ---
      POGGERZ
			`,
	}

];
