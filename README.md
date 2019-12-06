# ARIA-Reflection
Polyfill for ARIA role and attribute reflection

<dl>
  <dt>Spec</dt>
  <dd><a href="https://www.w3.org/TR/wai-aria-1.2/#idl-interface">Accessible Rich Internet Applications (WAI-ARIA) 1.2</a></dd>
  <dt>Size</dt>
  <dd>Less than 1 kb</dd>
  <dt>Support</dt>
  <dd>Works in <i>ECMAScript 5.1</i> compatible browsers</dd>
  <dt>Example</dt>
  <dd>

  ~~~HTML
  <button role="tab" aria-controls="tabpanel">Accessible Name</button>
  ~~~

  Get and set attribute value

  ~~~JavaScript
  button.role; // tab
    
  button.ariaSelected = true;
  ~~~

  Remove attribute
  
  ~~~JavaScript
  button.ariaControls = null;
  ~~~

  </dd>
</dl>
