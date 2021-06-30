# What is this?

Get perfect shadows every time for the non-designer.

# Installation

`npm i shadowpack --save`

Then...

```
import {shadowpack} from 'shadowpack';

shadowpack({
    shadow_type:'soft',
    padding:false
});

```

## Options

Shadowpack supports 2 options, both of which are optional:

- _shadow_type_ - _hard | soft_ (Defaults to soft)
- _padding_ - _boolean_ (Defaults to false)
