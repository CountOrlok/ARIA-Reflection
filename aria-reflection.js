/**
 *  @overview
 *
 *  Polyfill for reflection of ARIA content attributes
 *
 *
 *  @description
 *
 *  Adds getters and setters to `Element.prototype`
 *  in case the browser does not support the reflection
 *  of ARIA content attributes. This lets you get or set
 *  an attribute by reading or writing to a property,
 *  which is really less cumbersome than calling
 *  setAttribute and the like.
 *
 *
 *  @example
 *
 *  ~~~HTML
 *  <button role="tab" aria-controls="tabpanel">Accessible Name</button>
 *  ~~~
 *
 *  Get and set attribute value
 *
 *  ~~~JavaScript
 *  button.role; // tab
 *
 *  button.ariaSelected = true;
 *  ~~~
 *
 *  Remove attribute
 *
 *  ~~~JavaScript
 *  button.ariaControls = null;
 *  ~~~
 *
 *
 *
 */
(function() {

    'use strict';



    // If we have a prehistoric browser, make an early exit.

    if (!Object.defineProperty || !Array.prototype.forEach) return;



    /**
     *  @function reflect
     *
     *
     *  @description
     *
     *  Implements a getter and a setter for given
     *  attribute and property names. The value of the
     *  property is nullable, so reading a non-existing
     *  attribute returns null and assigning null
     *  removes an existing attribute.
     *
     *
     *  @example
     *
     *  ~~~JavaScript
     *  reflect('aria-labelledby', 'ariaLabelledBy')
     *  ~~~
     *
     *
     *
     */
    function reflect(attributeName, propertyName) {

        Object.defineProperty(Element.prototype, propertyName, {
            configurable: true,
            enumerable: true,

            get: function() {
                return this.hasAttribute(attributeName) ? this.getAttribute(attributeName) : null;
            },

            set: function(value) {
                if (value !== null) this.setAttribute(attributeName, value);

                else this.removeAttribute(attributeName);
            }
        });

    }



    // AccessibilityRole

    if (!Element.prototype.hasOwnProperty('role')) reflect('role', 'role');



    // AriaAttributes

    if (!Element.prototype.hasOwnProperty('ariaLabel'))

        [
            'ActiveDescendant',
            'Atomic',
            'AutoComplete',
            'Busy',
            'Checked',
            'ColCount',
            'ColIndex',
            'ColSpan',
            'Controls',
            'Current',
            'DescribedBy',
            'Details',
            'Disabled',
            'ErrorMessage',
            'Expanded',
            'FlowTo',
            'HasPopup',
            'Hidden',
            'Invalid',
            'KeyShortcuts',
            'Label',
            'LabelledBy',
            'Level',
            'Live',
            'Modal',
            'MultiLine',
            'MultiSelectable',
            'Orientation',
            'Owns',
            'Placeholder',
            'PosInSet',
            'Pressed',
            'ReadOnly',
            'Relevant',
            'Required',
            'RoleDescription',
            'RowCount',
            'RowIndex',
            'RowSpan',
            'Selected',
            'SetSize',
            'Sort',
            'ValueMax',
            'ValueMin',
            'ValueNow',
            'ValueText'

        ].forEach(function(name) {

            // Construct attribute and property names.

            reflect('aria-' + name.toLowerCase(), 'aria' + name);
        });

})();
