//var $showNotifications = $("#showNotifications");
//var $showNewMessages = $("#showNewMessages");
//
//var messages_url = "http://localhost/tatuapp-v-1.0.2/Messages/showChat";
//var notifications_url = "http://www.tatuapp.com/Notifications/showNotifications";
//$showNotifications.load(notifications_url);
//$showNewMessages.load(messages_url);



var $showNotifications = $("#showNotifications");
var $showNewMessages = $("#showNewMessages");
var messages_url = "http://www.tatuapp.com/Messages/showChat";
var notifications_url = "http://www.tatuapp.com/Notifications/showNotifications";
var notifications_count = "http://www.tatuapp.com/Notifications/notificationCount";
$showNotifications.load(notifications_url);
$showNewMessages.load(messages_url);

var $showNoificationCount = $("#notifications #notificationCount");
$showNoificationCount.load(notifications_count).fadeIn();