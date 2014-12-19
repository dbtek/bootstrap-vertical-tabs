---
layout: page
title: Home
menu: 2
---

<h3 style="margin-top:-15px;margin-bottom:20px;">Bootstrap Vertical Tabs <small>USAGE</small></h3>
<hr/>

<div class="pull-right col-lg-4 col-sm-6 col-md-5">
  <script async type="text/javascript" src="//cdn.carbonads.com/carbon.js?zoneid=1673&serve=C6AILKT&placement=dbtek" id="_carbonads_js"></script>
</div>

* Install Bootstrap Vertical Tabs  
  Via bower: `$ bower install bootstrap-vertical-tabs`  
    Or download from [Github](https://github.com/dbtek/bootstrap-vertical-tabs).

* Include css in your html.

* Use it. {% highlight html %}
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
