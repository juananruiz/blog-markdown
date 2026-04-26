import sys
import json
import os

def info():
    project_info = {
        "name": "Blog Minimalista",
        "tech_stack": "Next.js, Tailwind CSS, shadcn/ui, MDX",
        "status": "Enhanced with search and typography",
        "last_update": "2026-04-07"
    }
    print(json.dumps(project_info, indent=2))

if __name__ == "__main__":
    if len(sys.argv) > 1 and sys.argv[1] == "info":
        info()
    else:
        print("Usage: python session_manager.py info")
