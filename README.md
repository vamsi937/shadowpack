# What is this?

Get perfect shadows every time for the non-designer.

# Installation

`npm i shadowpacker --save`

Then...

```
import {shadowpacker} from 'shadowpacker';

shadowpacker({
    shadow_type:'soft',
    padding:true,
    padding_distance:"1.5em",
    shadow_color:"#ddd",
    shadow_animate:true,
    shadow_animation_duration:5
});

```

## Options

shadowpacker supports 6 options, both of which are optional:

- _shadow_type_ - _hard | soft_ (Defaults to soft)
- _padding_ - _boolean_ (Defaults to false)
- _padding_distance_ - _valid distance unit_ (Defaults to 1em) (to be provided only when padding option is true)
- _shadow_color_ - _valid rgba or hex color_ (Defaults to rgba( 0, 0, 0, 0.12))
- _shadow_animate_ - _boolean_ (Defaults to false)
- _shadow_animation_duration_ - _time in secs_ (Defaults to 1 sec) (to be provided only when shadow_animate option is true)
