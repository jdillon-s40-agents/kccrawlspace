import os

BASE = "https://www.crawlspacekc.com"
app_dir = "app"
updated = []
skipped = []

for root, dirs, files in os.walk(app_dir):
    dirs[:] = [d for d in dirs if not d.startswith('(') and d not in ['api', 'lp']]
    for fname in files:
        if fname != 'page.tsx':
            continue
        fpath = os.path.join(root, fname)
        rel = os.path.relpath(root, app_dir).replace('\\', '/')
        if rel == '.':
            canonical = BASE + "/"
        else:
            canonical = BASE + "/" + rel + "/"

        with open(fpath, encoding='utf-8') as f:
            content = f.read()

        if 'alternates' in content:
            skipped.append("SKIP (has alternates): " + fpath)
            continue

        meta_start = content.find('export const metadata')
        if meta_start < 0:
            skipped.append("SKIP (no metadata): " + fpath)
            continue

        depth = 0
        close_idx = -1
        for i in range(meta_start, len(content)):
            if content[i] == '{':
                depth += 1
            elif content[i] == '}':
                depth -= 1
                if depth == 0:
                    close_idx = i
                    break

        if close_idx < 0:
            skipped.append("SKIP (no closing brace): " + fpath)
            continue

        insert = ",\n  alternates: {\n    canonical: '" + canonical + "',\n  }"
        new_content = content[:close_idx] + insert + content[close_idx:]

        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(new_content)

        updated.append(fpath + " -> " + canonical)

print("Updated " + str(len(updated)) + " files:")
for u in updated:
    print("  " + u)
print("\nSkipped " + str(len(skipped)) + " files:")
for s in skipped:
    print("  " + s)
