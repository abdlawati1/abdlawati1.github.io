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
	"id": "1",
	"date": "01/06/2022",
	"title": "This is a title 1",
	"type": "melanoma",
	"image": "1.jpg",
	"abstract": "This is a test abstract 1.",
	"full": `
		Paragraph 1
		---
		Paragraph 2
		---
		Paragraph 3
		`,
	},
	{
	"id": "2",
	"date": "05/06/2022",
	"title": "This is a title 2",
	"type": "blood",
	"image": "2.jpg",
	"abstract": "This is a test abstract 2.",
	"full": `
		Paragraph 1
		---
		Paragraph 2
		---
		Paragraph 3
		`,
	},
	{
	"id": "3",
	"date": "09/06/2022",
	"title": "This is a title 3",
	"type": "cns",
	"image": "3.jpg",
	"abstract": "This is a test abstract 3.",
	"full": `
		Paragraph 1
		---
		Paragraph 2
		---
		Paragraph 3
		`,
	}

];
