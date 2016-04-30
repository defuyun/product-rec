var goods =[
	{
		name:"Amercian apple",
		seller:"Carrot",
		rating:"1",
		ref:"url1"
	},
	{
		name:"Chinese banana",	
		seller:"Chris",
		rating:"2",
		ref:"url2"
	},
	{
		name:"Australian oranges",
		seller:"Carl",
		rating:"3",
		ref:"url3"
	}
]

Template.goodsList.helpers({
	goods : goods
});