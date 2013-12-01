Bootstrap Vertical Tabs
=======================

Vertical tabs component for Bootstrap 3.

### Usage

* [Download](https://github.com/dbtek/bootstrap-vertical-tabs/archive/master.zip) the latest css.
* Include in your html.

```html
<link rel="stylesheet" href="bootstrap.vertical-tabs.css">
```

* Use it.

```html
<div class="col-sm-3"> <!-- required for floating -->  
    <!-- Nav tabs -->  
    <ul class="nav nav-tabs-vertical">  
      <li class="active"><a href="#home" data-toggle="tab">Home</a></li>  
      <li><a href="#profile" data-toggle="tab">Profile</a></li>  
      <li><a href="#messages" data-toggle="tab">Messages</a></li>  
      <li><a href="#settings" data-toggle="tab">Settings</a></li>  
    </ul>  
</div>
<div class="col-sm-9">  
    <!-- Tab panes -->  
    <div class="tab-content">  
      <div class="tab-pane active" id="home">Home Tab.</div>  
      <div class="tab-pane" id="profile">Profile Tab.</div>  
      <div class="tab-pane" id="messages">Messages Tab.</div>  
      <div class="tab-pane" id="settings">Settings Tab.</div>  
    </div>  
</div>  
```
* Further, take a look at included demo!

### License
[MIT](opensource.org/licenses/MIT)
