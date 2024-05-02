# Boxel-3d-Mods
A collection of mods for boxel 3d.  
An extra bonus: [A detailed curated list of boxel 3d community levels](https://github.com/Charlieee1/Boxel-3d-Mods/blob/main/Boxel%203d%20Levels.md)

## How to Use
### Use my mods
Download all the mods you want to use. Then you need to run the code on the boxel 3d website. There are different ways to do this:
- The easiest way is to run your mods (the javascript code) in your browser console. Make sure to run the scripts in the correct order.
- Use the tampermonkey extension to run the mods. Make sure they are loaded in the correct order.
- Use another extension to inject javascript into a page, or similar.

**If you're having trouble running the mods:**  
Try only running the modding API. If it is successful, you will see tiny (very tiny - 5px tall) text in the bottom right that confirms the API is loaded. Add one mod at a time, and make sure each one adds a new line to the bottom right.

### Create new mods
Follow these simple instructions:
1. Learn how to use the mods
2. Learn javascript
3. Look at the existing mods and see how they work
4. Voila! You can now make your own mods

## Which Order to run the Mods
Most mods require other mods to run properly. Here is the dependency tree:
- Modding API
  - Platforming Mod
    - Dash Mod
  - Death Detector
- Platforming Mod for Mobile (incompatible with other mods)
