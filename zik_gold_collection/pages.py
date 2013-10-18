# -*- coding: utf-8 -*-
"""
The project pages map

All of these pages inherit from a default version with the default lang (US or 
International English) content and have a version for each lang.

Langage objects contains all text content to apply in the template.

Create/update the POT file :

    pybabel extract -F babel.cfg -o locale/messages.pot .

Init *.pot files for langs :

    pybabel init -l en_US -d locale -i locale/messages.pot
    pybabel init -l fr -d locale -i locale/messages.pot

Update them from the *.POT (after rebuild it) :

    pybabel update -l en_US -d locale -i locale/messages.pot
    pybabel update -l fr -d locale -i locale/messages.pot

One command to compile them all :

    pybabel compile -f -d locale

"""
from optimus.builder.pages import PageViewBase, RstPageView
from optimus.conf import settings
"""
Page objects
"""
class Index(PageViewBase):
    """
    Index page with scrolling enabled for all other langs
    """
    template_name = "index.html"
    destination = "{language_code}/index.html"
    
class FullSet(PageViewBase):
    """
    Index page with scrolling enabled for all other langs
    """
    template_name = "full.html"
    destination = "{language_code}/full.htm"

class FullSetParralax(PageViewBase):
    """
    Index page with scrolling enabled for all other langs
    """
    template_name = "full.html"
    destination = "{language_code}/fullparallax.html"

# Available pages to build
PAGES = [
    Index(lang=settings.LANGUAGE_CODE, destination="index.html"),
    FullSet(lang=settings.LANGUAGE_CODE, destination="full.html"),
    FullSetParralax(lang=settings.LANGUAGE_CODE, destination="fullparallax.html"),
    #Index(lang=settings.LANGUAGE_CODE, destination="en/index.html"),
    Index(lang="fr"),
    FullSet(lang="fr"),
    FullSetParralax(lang="fr"),
]
