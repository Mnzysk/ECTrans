/** 1.	Traslation Model **/
var Traslation = function(){
	this.source_language;
	this.target_language;
	this.prob1;
	this.prob2;

}

Traslation.prototype.create = function(source,target,prob1,prob2){
	this.source_language = source;
	this.target_language = target;
	this.prob1 = prob1;
	this.prob2 = prob2;
}

Traslation.getTranslation = function(source){
	return source;
}






/** 2.	Language Model **/

var Language = function(){
	this.language;
	this.prob;

}

Language.prototype.create = function(language,prob){
	this.language = langauge;
	this.prob = prob;
}

Traslation.getBestLanguage = function(source){
	return source;
}







/** 3.	Suggestion Model**/

var Suggestion = function(){
	this.source_language;
	this.target_language;
	this.comment;
	this.time_stamp;

}

Suggestion.prototype.create = function(source,target,comment,time_stamp){
	this.source_language = source;
	this.target_language = target;
	this.comment = comment;
	this.time_stamp = time_stamp;
}

Suggestion.getTranslation = function(source){
	return source;
}
Suggestion.findById = function(id){
	return id;
}




/** 4.	Suggestion Model **/





/** 5.	Dictionary Model **/


var Dictionary = function(){
	this.source_language;
	this.target_language;
	this.description;
	this.synonym;

}

 Dictionary.prototype.create = function(source,target,description,synonym){
	this.source_language = source;
	this.target_language = target;
	this.description = description;
	this.synonym = synonym;
}

 Dictionary.getMeaning = function(source){
	return source;
}

Dictionary.findById = function(id){
	return id;
}




/** 6.	History Model **/

 var History = function(){
	this.source_language;
	this.target_language;
	this.time_stamp;

}

History.prototype.create = function(source,target,time_stamp){
	this.source_language = source;
	this.target_language = target;
	this.time_stamp = time_stamp;
}

History.findById = function(id){
	return id;
}

History.findAll = function(){
	return Array;
}








/** 7.	Category Model **/


Category.prototype.create = function(title,description,time_stamp){
	this.title = title;
	this.description = description;
	this.time_stamp = time_stamp;
}

Category.findById = function(id){
	return id;
}

Category.findAll = function(){
	return Array;
}




/** 8.	Content Model **/
Content.prototype.create = function(title,description,data,time_stamp){
	this.title = title;
	this.description = description;
	this.data = data;
	this.time_stamp = time_stamp;
}

Content.findById = function(id){
	return id;
}

Content.findAll = function(){
	return Array;
}
