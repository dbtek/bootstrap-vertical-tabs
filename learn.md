---
layout: page
title: Home
menu: 2
---

<h3 style="margin-top:-15px;margin-bottom:20px;">Bootstrap Vertical Tabs <small>USAGE</small></h3>
<hr/>

* Install Bootstrap Vertical Tabs  
  Via bower: {% highlight bash %} bower install bootstrap-vertical-tabs {% endhighlight %}  
  Or download from [Github](https://github.com/dbtek/bootstrap-vertical-tabs).
* Include in your html.

```html
<link rel="stylesheet" href="bootstrap.vertical-tabs.min.css" />
```

* Use it.

{% highlight html %}
<div class="col-xs-3"> <!-- required for floating -->
    <!-- Nav tabs -->
    <ul class="nav nav-tabs tabs-left"><!-- 'tabs-right' for right tabs -->
      <li class="active"><a href="#home" data-toggle="tab">Home</a></li>
      <li><a href="#profile" data-toggle="tab">Profile</a></li>
      <li><a href="#messages" data-toggle="tab">Messages</a></li>
      <li><a href="#settings" data-toggle="tab">Settings</a></li>
    </ul>
</div>

<div class="col-xs-9">
    <!-- Tab panes -->
    <div class="tab-content">
      <div class="tab-pane active" id="home">Home Tab.</div>
      <div class="tab-pane" id="profile">Profile Tab.</div>
      <div class="tab-pane" id="messages">Messages Tab.</div>
      <div class="tab-pane" id="settings">Settings Tab.</div>
    </div>
</div>
{% endhighlight %}
