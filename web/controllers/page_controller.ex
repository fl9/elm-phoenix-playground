defmodule ElmPhoenixPlayground.PageController do
  use ElmPhoenixPlayground.Web, :controller

  def index(conn, _params) do
    render conn, "index.html"
  end
end
