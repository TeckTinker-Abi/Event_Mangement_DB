import os
from PIL import Image

MAIN_FOLDER = r"E:\WYNSC\Event Management\event-website\public\images"

for folder_name in os.listdir(MAIN_FOLDER):
    folder_path = os.path.join(MAIN_FOLDER, folder_name)

    if os.path.isdir(folder_path):

        image_count = 1

        for file in os.listdir(folder_path):
            file_path = os.path.join(folder_path, file)

            # 🚫 Skip already webp files
            if file.lower().endswith('.webp'):
                print(f"⏩ Skipped (already webp): {file}")
                continue

            # ✅ Convert only other image formats
            if file.lower().endswith(('.png', '.jpg', '.jpeg', '.bmp', '.gif')):
                try:
                    img = Image.open(file_path)

                    clean_name = folder_name.replace(" ", "_")
                    new_filename = f"{clean_name}_{image_count}.webp"
                    new_path = os.path.join(folder_path, new_filename)

                    img.save(new_path, "WEBP", quality=90)

                    # delete only original non-webp
                    os.remove(file_path)

                    print(f"✅ {file} → {new_filename}")

                    image_count += 1

                except Exception as e:
                    print(f"❌ Error with {file}: {e}")

print("\n🎉 Done safely!")