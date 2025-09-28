# LubeLogger Vehicle Maps

Welcome to the community-contributed LubeLogger Vehicle Maps\! This repository provides a collection of custom vehicle maps to enhance your LubeLogger experience.

## What are Vehicle Maps?

**LubeLogger Vehicle Maps** allow you to create interactive images of your vehicle, linking specific areas of the image to various maintenance tasks or information within LubeLogger. This feature helps visualize maintenance points and can make tracking your vehicle's service history even more intuitive.

-----

Learn more about this powerful feature in the [LubeLogger documentation](https://docs.lubelogger.com/Advanced/Vehicle%20Maps).

## How to Create and Convert Your Own Maps

To easily create and convert maps into the correct LubeLogger format, you can use one of the following methods:

1.  **Online Converter (Recommended)**

    Our user-friendly online converter makes the process straightforward:
    [LubeLogger Vehicle Map Converter](https://zeromark30.github.io/Lubelogvehiclemap/converter/)

    Simply follow the instructions on the page to upload your `image-map.net` output and get your LubeLogger-ready map.

2.  **Python Script**

    For those who prefer a local solution, you can use our Python conversion script. This is ideal if you're comfortable with command-line tools.

    *Download the [imagemaptovehiclemap.py](https://raw.githubusercontent.com/Zeromark30/Lubelogvehiclemap/refs/heads/main/scripts/imagemaptovehiclemap.py) script from this repository.*

-----

## Using `image-map.net` to Draw Your Map

The [`image-map.net`](https://www.image-map.net/) website is an excellent tool for drawing the interactive areas on your vehicle image. Here's a quick guide:

1.  **Load Your Image**: Go to `image-map.net` and upload the image of your vehicle.
2.  **Open Developer Console**: Press `F12` (or `Ctrl+Shift+I` / `Cmd+Option+I`) to open your browser's developer console.
3.  **Paste Setup Script**: Paste the contents of the [`console_imagemap_setup`](https://raw.githubusercontent.com/Zeromark30/Lubelogvehiclemap/refs/heads/main/scripts/console_imagemap_setup.txt) file (found in this repository) into the console and press `Enter`. This script preps `image-map.net` for LubeLogger-specific outputs.
4.  **Areas Added**: You should see confirmation that the necessary areas have been added.
5.  **Draw Shapes**: Start drawing your desired shapes (circles, polygons) on your vehicle image to define interactive regions.

Once you've drawn all your shapes on `image-map.net`, you'll need to export the generated map code and then use either our online converter or the Python script to prepare it for LubeLogger.

-----

## Contribute Your Maps\!

We encourage you to share your vehicle maps with the LubeLogger community\! If you've created a useful map and would like to see it included in this collection, please submit a **Pull Request**.

We'll review your contribution and, once approved, add it to the shared set for everyone to enjoy.
