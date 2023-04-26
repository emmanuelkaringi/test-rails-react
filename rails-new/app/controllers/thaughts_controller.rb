class ThaughtsController < ApplicationController
  before_action :set_thaught, only: %i[ show edit update destroy ]
  skip_before_action :verify_authenticity_token

  # GET /thaughts or /thaughts.json
  def index
    @thaughts = Thaught.all
  end

  # GET /thaughts/1 or /thaughts/1.json
  def show
  end

  # GET /thaughts/new
  def new
    @thaught = Thaught.new
  end

  # GET /thaughts/1/edit
  def edit
  end

  # POST /thaughts or /thaughts.json
  def create
    @thaught = Thaught.new(thaught_params)

    respond_to do |format|
      if @thaught.save
        format.html { redirect_to thaught_url(@thaught), notice: "Thaught was successfully created." }
        format.json { render :show, status: :created, location: @thaught }
      else
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @thaught.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /thaughts/1 or /thaughts/1.json
  def update
    respond_to do |format|
      if @thaught.update(thaught_params)
        format.html { redirect_to thaught_url(@thaught), notice: "Thaught was successfully updated." }
        format.json { render :show, status: :ok, location: @thaught }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @thaught.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /thaughts/1 or /thaughts/1.json
  def destroy
    @thaught.destroy

    respond_to do |format|
      format.html { redirect_to thaughts_url, notice: "Thaught was successfully destroyed." }
      format.json { render json: Thaught.all, status: :ok }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_thaught
      @thaught = Thaught.find(params[:id])
    end

    # Only allow a list of trusted parameters through.
    def thaught_params
      params.require(:thaught).permit(:title, :body, :id)
    end
end
