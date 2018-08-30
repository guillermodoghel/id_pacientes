Ext.data.JsonP.$_fn_ajaxSelectPicker_defaults({"tagname":"class","name":"$.fn.ajaxSelectPicker.defaults","alternateClassNames":[],"members":[{"name":"ajax","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-ajax","meta":{"required":true}},{"name":"ajaxResultsPreHook","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-ajaxResultsPreHook","meta":{"deprecated":{"text":"<p>Since version <code>1.2.0</code>, see: <a href=\"#!/api/$.fn.ajaxSelectPicker.defaults-cfg-preprocessData\" rel=\"$.fn.ajaxSelectPicker.defaults-cfg-preprocessData\" class=\"docClass\">preprocessData</a>.</p>\n"}}},{"name":"ajaxSearchUrl","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-ajaxSearchUrl","meta":{"deprecated":{"text":"<p>Since version <code>1.2.0</code>, see: <a href=\"#!/api/$.fn.ajaxSelectPicker.defaults-cfg-ajax\" rel=\"$.fn.ajaxSelectPicker.defaults-cfg-ajax\" class=\"docClass\">ajax</a>.</p>\n"}}},{"name":"bindEvent","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-bindEvent","meta":{}},{"name":"cache","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-cache","meta":{}},{"name":"clearOnEmpty","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-clearOnEmpty","meta":{}},{"name":"clearOnError","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-clearOnError","meta":{}},{"name":"debug","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-debug","meta":{"deprecated":{"text":"<p>Since version <code>1.2.0</code>, see: <a href=\"#!/api/$.fn.ajaxSelectPicker.defaults-cfg-log\" rel=\"$.fn.ajaxSelectPicker.defaults-cfg-log\" class=\"docClass\">log</a>.</p>\n"}}},{"name":"emptyRequest","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-emptyRequest","meta":{}},{"name":"ignoredKeys","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-ignoredKeys","meta":{}},{"name":"langCode","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-langCode","meta":{}},{"name":"locale","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-locale","meta":{}},{"name":"log","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-log","meta":{}},{"name":"mixWithCurrents","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-mixWithCurrents","meta":{"deprecated":{"text":"<p>Since version <code>1.2.0</code>, see: <a href=\"#!/api/$.fn.ajaxSelectPicker.defaults-cfg-preserveSelected\" rel=\"$.fn.ajaxSelectPicker.defaults-cfg-preserveSelected\" class=\"docClass\">preserveSelected</a>.</p>\n"}}},{"name":"placeHolderOption","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-placeHolderOption","meta":{"deprecated":{"text":"<p>Since version <code>1.2.0</code>, see: <a href=\"#!/api/$.fn.ajaxSelectPicker.locale-cfg-emptyTitle\" rel=\"$.fn.ajaxSelectPicker.locale-cfg-emptyTitle\" class=\"docClass\">$.fn.ajaxSelectPicker.locale.emptyTitle</a>.</p>\n"}}},{"name":"preprocessData","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-preprocessData","meta":{}},{"name":"preserveSelected","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-preserveSelected","meta":{}},{"name":"preserveSelectedPosition","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-preserveSelectedPosition","meta":{}},{"name":"processData","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-processData","meta":{}},{"name":"requestDelay","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-requestDelay","meta":{}},{"name":"restoreOnError","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-restoreOnError","meta":{}},{"name":"templates","tagname":"cfg","owner":"$.fn.ajaxSelectPicker.defaults","id":"cfg-templates","meta":{}}],"aliases":{},"files":[{"filename":"","href":""}],"component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><h3 class='members-title icon-cfg'>Config options</h3><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Required config options</h3><div id='cfg-ajax' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-ajax' class='name expandable'>ajax</a> : Object<span class=\"signature\"><span class='required' >required</span></span></div><div class='description'><div class='short'>The options to pass to the jQuery AJAX request. ...</div><div class='long'><p>The options to pass to the jQuery AJAX request.</p>\n\n<pre><code class=\"js\">{\n    url: null, // Required.\n    type: 'POST',\n    dataType: 'json',\n    data: {\n        q: '{{{q}}}'\n    }\n}\n</code></pre>\n<p>Defaults to: <code>{url: null, type: &#39;POST&#39;, dataType: &#39;json&#39;, data: {q: &#39;{{{q}}}&#39;}}</code></p></div></div></div></div><div class='subsection'><div class='definedBy'>Defined By</div><h4 class='members-subtitle'>Optional config options</h3><div id='cfg-ajaxResultsPreHook' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-ajaxResultsPreHook' class='name expandable'>ajaxResultsPreHook</a> : Function<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This cfg has been <strong>deprected</strong> </p>\n        <p>Since version <code>1.2.0</code>, see: <a href=\"#!/api/$.fn.ajaxSelectPicker.defaults-cfg-preprocessData\" rel=\"$.fn.ajaxSelectPicker.defaults-cfg-preprocessData\" class=\"docClass\">preprocessData</a>.</p>\n\n        </div>\n</div></div></div><div id='cfg-ajaxSearchUrl' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-ajaxSearchUrl' class='name expandable'>ajaxSearchUrl</a> : String<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This cfg has been <strong>deprected</strong> </p>\n        <p>Since version <code>1.2.0</code>, see: <a href=\"#!/api/$.fn.ajaxSelectPicker.defaults-cfg-ajax\" rel=\"$.fn.ajaxSelectPicker.defaults-cfg-ajax\" class=\"docClass\">ajax</a>.</p>\n\n        </div>\n</div></div></div><div id='cfg-bindEvent' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-bindEvent' class='name expandable'>bindEvent</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The event to bind on the search input element to fire a request. ...</div><div class='long'><p>The event to bind on the search input element to fire a request.</p>\n<p>Defaults to: <code>&quot;keyup&quot;</code></p></div></div></div><div id='cfg-cache' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-cache' class='name expandable'>cache</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Cache previous requests. ...</div><div class='long'><p>Cache previous requests. If enabled, the \"enter\" key (13) is enabled to\nallow users to force a refresh of the request.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-clearOnEmpty' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-clearOnEmpty' class='name expandable'>clearOnEmpty</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Clears the previous results when the search input has no value. ...</div><div class='long'><p>Clears the previous results when the search input has no value.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-clearOnError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-clearOnError' class='name expandable'>clearOnError</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Clears the select list when the request returned with an error. ...</div><div class='long'><p>Clears the select list when the request returned with an error.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-debug' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-debug' class='name expandable'>debug</a> : Boolean<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This cfg has been <strong>deprected</strong> </p>\n        <p>Since version <code>1.2.0</code>, see: <a href=\"#!/api/$.fn.ajaxSelectPicker.defaults-cfg-log\" rel=\"$.fn.ajaxSelectPicker.defaults-cfg-log\" class=\"docClass\">log</a>.</p>\n\n        </div>\n</div></div></div><div id='cfg-emptyRequest' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-emptyRequest' class='name expandable'>emptyRequest</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Invoke a request for empty search values. ...</div><div class='long'><p>Invoke a request for empty search values.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-ignoredKeys' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-ignoredKeys' class='name expandable'>ignoredKeys</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Key codes to ignore so a request is not invoked with bindEvent. ...</div><div class='long'><p>Key codes to ignore so a request is not invoked with bindEvent. The\n\"enter\" key (13) will always be dynamically added to any list provided\nunless the \"cache\" option above is set to \"true\".</p>\n\n<pre><code class=\"js\">{\n    9: \"tab\",\n    16: \"shift\",\n    17: \"ctrl\",\n    18: \"alt\",\n    27: \"esc\",\n    37: \"left\",\n    39: \"right\",\n    38: \"up\",\n    40: \"down\",\n    91: \"meta\"\n}\n</code></pre>\n<p>Defaults to: <code>{9: &quot;tab&quot;, 16: &quot;shift&quot;, 17: &quot;ctrl&quot;, 18: &quot;alt&quot;, 27: &quot;esc&quot;, 37: &quot;left&quot;, 39: &quot;right&quot;, 38: &quot;up&quot;, 40: &quot;down&quot;, 91: &quot;meta&quot;}</code></p></div></div></div><div id='cfg-langCode' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-langCode' class='name expandable'>langCode</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>The language code to use for string translation. ...</div><div class='long'><p>The language code to use for string translation. By default this value\nis determined by the browser, however it is not entirely reliable. If\nyou encounter inconsistencies, you may need to manually set this option.</p>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-locale' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-locale' class='name expandable'>locale</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Provide specific overrides for locale string translations. ...</div><div class='long'><p>Provide specific overrides for <a href=\"#!/api/$.fn.ajaxSelectPicker.locale\" rel=\"$.fn.ajaxSelectPicker.locale\" class=\"docClass\">locale string</a> translations. Values\nset here will cause the plugin to completely ignore defined locale string\ntranslations provided by the set language code. This is useful when\nneeding to change a single value or when being used in a system that\nprovides its own translations, like a CMS.</p>\n\n<pre><code class=\"js\">locale: {\n    searchPlaceholder: Drupal.t('Find...')\n}\n</code></pre>\n<p>Defaults to: <code>null</code></p></div></div></div><div id='cfg-log' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-log' class='name expandable'>log</a> : String|Number|Number<span class=\"signature\"></span></div><div class='description'><div class='short'>Determines the amount of logging that is displayed:\n\n\n0, false: Display no information from the plugin. ...</div><div class='long'><p>Determines the amount of logging that is displayed:</p>\n\n<ul>\n<li><strong>0, false:</strong> Display no information from the plugin.</li>\n<li><strong>1, 'error':</strong> Fatal errors that prevent the plugin from working.</li>\n<li><strong>2, 'warn':</strong> Warnings that may impact the display of request data, but does not prevent the plugin from functioning.</li>\n<li><strong>3, 'info':</strong> Provides additional information, generally regarding the from request data and callbacks.</li>\n<li><strong>4, true, 'debug':</strong> Display all possible information. This will likely be highly verbose and is only recommended for development purposes or tracing an error with a request.</li>\n</ul>\n\n<p>Defaults to: <code>&#39;error&#39;</code></p></div></div></div><div id='cfg-mixWithCurrents' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-mixWithCurrents' class='name expandable'>mixWithCurrents</a> : Boolean<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This cfg has been <strong>deprected</strong> </p>\n        <p>Since version <code>1.2.0</code>, see: <a href=\"#!/api/$.fn.ajaxSelectPicker.defaults-cfg-preserveSelected\" rel=\"$.fn.ajaxSelectPicker.defaults-cfg-preserveSelected\" class=\"docClass\">preserveSelected</a>.</p>\n\n        </div>\n</div></div></div><div id='cfg-placeHolderOption' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-placeHolderOption' class='name expandable'>placeHolderOption</a> : Object<span class=\"signature\"><span class='deprecated' >deprecated</span></span></div><div class='description'><div class='short'> ...</div><div class='long'>\n        <div class='rounded-box deprecated-box deprecated-tag-box'>\n        <p>This cfg has been <strong>deprected</strong> </p>\n        <p>Since version <code>1.2.0</code>, see: <a href=\"#!/api/$.fn.ajaxSelectPicker.locale-cfg-emptyTitle\" rel=\"$.fn.ajaxSelectPicker.locale-cfg-emptyTitle\" class=\"docClass\">$.fn.ajaxSelectPicker.locale.emptyTitle</a>.</p>\n\n        </div>\n</div></div></div><div id='cfg-preprocessData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-preprocessData' class='name expandable'>preprocessData</a> : Function|null<span class=\"signature\"></span></div><div class='description'><div class='short'>Process the raw data returned from a request. ...</div><div class='long'><p>Process the raw data returned from a request.</p>\n\n<p>The following arguments are passed to this callback:</p>\n\n<ul>\n<li><strong>data</strong> - <code>Array</code> The raw data returned from the request, passed by reference.</li>\n</ul>\n\n\n<p>This callback must return one of the following:</p>\n\n<ul>\n<li><code>Array</code> - A new array of items. This will replace the passed data.</li>\n<li><code>undefined|null|false</code> - Stops the callback and will use whatever modifications have been made to data.</li>\n</ul>\n\n\n<pre><code class=\"js\">function (data) {\n    var new = [], old = [], other = [];\n    for (var i = 0; i &lt; data.length; i++) {\n        // Add items flagged as \"new\" to the correct array.\n        if (data[i].new) {\n            new.push(data[i]);\n        }\n        // Add items flagged as \"old\" to the correct array.\n        else if (data[i].old) {\n            old.push(data[i]);\n        }\n        // Something out of the ordinary happened, put these last.\n        else {\n            other.push(data[i]);\n        }\n    }\n    // Sort the data according to the order of these arrays.\n    return [].concat(new, old, other).\n}\n</code></pre>\n<p>Defaults to: <code>function(){}</code></p></div></div></div><div id='cfg-preserveSelected' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-preserveSelected' class='name expandable'>preserveSelected</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Preserve selected items(s) between requests. ...</div><div class='long'><p>Preserve selected items(s) between requests. When enabled, they will be\nplaced in an <code>&lt;optgroup&gt;</code> with the label <code>Currently Selected</code>. Disable\nthis option if you send your currently selected items along with your\nrequest and let the server handle this responsibility.</p>\n<p>Defaults to: <code>true</code></p></div></div></div><div id='cfg-preserveSelectedPosition' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-preserveSelectedPosition' class='name expandable'>preserveSelectedPosition</a> : String<span class=\"signature\"></span></div><div class='description'><div class='short'>Place the currently selected options 'before' or 'after' the options\nreturned from the request. ...</div><div class='long'><p>Place the currently selected options <code>'before'</code> or <code>'after'</code> the options\nreturned from the request.</p>\n<p>Defaults to: <code>&#39;after&#39;</code></p></div></div></div><div id='cfg-processData' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-processData' class='name expandable'>processData</a> : Function|null<span class=\"signature\"></span></div><div class='description'><div class='short'>Process the data returned after this plugin, but before the list is built. ...</div><div class='long'><p>Process the data returned after this plugin, but before the list is built.</p>\n<p>Defaults to: <code>function(){}</code></p></div></div></div><div id='cfg-requestDelay' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-requestDelay' class='name expandable'>requestDelay</a> : Number<span class=\"signature\"></span></div><div class='description'><div class='short'>The amount of time, in milliseconds, that must pass before a request\nis initiated. ...</div><div class='long'><p>The amount of time, in milliseconds, that must pass before a request\nis initiated. Each time the <a href=\"#!/api/$.fn.ajaxSelectPicker.defaults-cfg-bindEvent\" rel=\"$.fn.ajaxSelectPicker.defaults-cfg-bindEvent\" class=\"docClass\">bindEvent</a> is fired, it will cancel the\ncurrent delayed request and start a new one.</p>\n<p>Defaults to: <code>300</code></p></div></div></div><div id='cfg-restoreOnError' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-restoreOnError' class='name expandable'>restoreOnError</a> : Boolean<span class=\"signature\"></span></div><div class='description'><div class='short'>Restores the select list with the previous results when the request\nreturns with an error. ...</div><div class='long'><p>Restores the select list with the previous results when the request\nreturns with an error.</p>\n<p>Defaults to: <code>false</code></p></div></div></div><div id='cfg-templates' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='$.fn.ajaxSelectPicker.defaults'>$.fn.ajaxSelectPicker.defaults</span><br/></div><a href='#!/api/$.fn.ajaxSelectPicker.defaults-cfg-templates' class='name expandable'>templates</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>The DOM templates used in this plugin. ...</div><div class='long'><p>The DOM templates used in this plugin.</p>\n\n<pre><code class=\"js\">templates: {\n    // The placeholder for status updates pertaining to the list and request.\n    status: '&lt;div class=\"status\"&gt;&lt;/div&gt;',\n}\n</code></pre>\n<p>Defaults to: <code>{status: &#39;&lt;div class=&quot;status&quot;&gt;&lt;/div&gt;&#39;}</code></p></div></div></div></div></div></div></div>","meta":{}});