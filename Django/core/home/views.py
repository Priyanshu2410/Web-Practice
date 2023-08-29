from django.shortcuts import render
from django.http import HttpResponse

# Create your views here.


def home(request):

    text = """
    Lorem ipsum, dolor sit amet consectetur adipisicing elit. Consequatur possimus cupiditate similique a quasi tempora deserunt rem fuga ratione doloribus officiis aliquam aliquid consequuntur ipsa esse enim sapiente eius dicta error, modi rerum? Ipsam sapiente quas, veritatis obcaecati voluptatem rerum saepe ad! Ut consectetur voluptas amet tempore tempora distinctio aliquam explicabo nobis aspernatur odit, ipsam officia facere in. Voluptates in quia culpa atque tempore ipsam corporis qui assumenda fugiat quae illo molestiae saepe expedita sequi, ad excepturi! Excepturi totam numquam corporis possimus veniam distinctio? Soluta quis eveniet dolor! Maxime quod eaque rem at minus laborum suscipit. Delectus eveniet distinctio voluptas.
"""
    peoples = [
        { "name": "John", "age": 23 },
        { "name": "Jane", "age": 16},
        { "name": "Joe", "age": 43 },
        { "name": "pri", "age": 17 },
    ]

    return render(request, "index.html", context={'peoples': peoples , 'text': text, }) 

def about(request):
    return render(request, "about.html")
def contect(request):
    return render(request, "contect.html")