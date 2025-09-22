import re
import json

def process_area_tags(html_input, output_filename="output.json"):
    """
    Extracts and transforms multiple <area> tags from an HTML string
    into a JSON object with a "Map" key containing a list of objects,
    then writes the JSON to a specified file.

    Args:
        html_input (str): The HTML string containing one or more <area> tags.
        output_filename (str): The name of the file to write the JSON output to.
                               Defaults to "output.json".
    Returns:
        None
    """
    area_tags = re.findall(r'<area[^>]*>', html_input)
    map_items = []

    if not area_tags:
        print("No <area> tags found in the provided input.")
        return

    for area_tag in area_tags:
        title_match = re.search(r'title="([^"]*)"', area_tag)
        coords_match = re.search(r'coords="([^"]*)"', area_tag)
        shape_match = re.search(r'shape="([^"]*)"', area_tag)

        tags = title_match.group(1) if title_match else ""
        coordinates = coords_match.group(1) if coords_match else ""
        shape = shape_match.group(1) if shape_match else ""

        item_data = {
            "Tags": tags,
            "Coordinates": coordinates,
            "Color": "#",
            "Shape": shape,
            "Opacity": 0.5
        }
        map_items.append(item_data)

    output_data = {
        "Map": map_items
    }

    # Write the JSON data to a file
    try:
        with open(output_filename, 'w', encoding='utf-8') as f:
            json.dump(output_data, f, indent=4)
        print(f"JSON output successfully written to '{output_filename}'")
    except IOError as e:
        print(f"Error writing to file '{output_filename}': {e}")


# --- Main part of the script to prompt the user ---
if __name__ == "__main__":
    print("Please paste your HTML <map> content below (including <map> and </map> tags).")
    print("Type 'END' on a new line when you are finished.")

    user_html_input_lines = []
    while True:
        try:
            line = input()
            if line.strip().upper() == 'END':
                break
            user_html_input_lines.append(line)
        except EOFError:  # Handle cases where input is redirected/piped and ends unexpectedly
            break

    user_html_input = "\n".join(user_html_input_lines)

    if not user_html_input.strip():
        print("No HTML input provided. Exiting.")
    else:
        # Prompt for output filename
        default_filename = "map_data.json"
        output_file = input(
            f"Enter output filename (default: {default_filename}): "
        ).strip()
        if not output_file:
            output_file = default_filename

        process_area_tags(user_html_input, output_filename=output_file)