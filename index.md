---
layout: page
title: Home
menu: 1
---

Missing vertical tabs component for Bootstrap 3 by [dbtek](http://ismaildemirbilek.com).

<a class="btn btn-default" href="https://github.com/dbtek/bootstrap-vertical-tabs">Get it on GitHub</a>

### Usage

* [Download](https://github.com/dbtek/bootstrap-vertical-tabs/archive/master.zip) the latest css.
* Include in your html.

```html
<link rel="stylesheet" href="bootstrap.vertical-tabs.css">
```

* Use it.

{% highlight html %}
<div class="col-xs-3"> <!-- required for floating -->
    <!-- Nav tabs -->
    <ul class="nav nav-tabs tabs-left">
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

### License

Open Sourced under [MIT License](http://opensource.org/licenses/mit)


